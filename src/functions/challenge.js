import { paddocks, paddockManagers, paddockType, farms } from './dataChallenge'

  /*
    SECCIÓN PROBLEMAS
      - Las siguientes son preguntas básicas de Javascript y manejo de datos. 
      - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
      - Debe usar nombres explicativos para sus variables.
      - Usar sintaxis ES6.     
      - Su prueba debe ejecutarse sin errores al correr los test.
      - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
  */
  // Tip: Una hectárea equivale a 10.000m2
  
  /**
  * Function Challenge N0
  * @param {Array} paddockManagersArray Arreglo de objetos con los datos de los managers
  * @returns {Array} Arreglo con los ids de los responsables de cada cuartel, ordenados de menor a mayor
  */  
  export const listPaddockManagerIds = (paddockManagersArray = paddockManagers) => {
    return paddockManagersArray.map( manager => manager.id ).sort((a, b)=> a-b);
  }
  
  /**
  * Function Challenge N1
  * @param {Array} paddockManagersArray Arreglo de objetos con los datos de los managers.
  * @returns {Array} Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre.
  */  
  export const listPaddockManagersByName = (paddockManagersArray = paddockManagers) => {
    return paddockManagersArray.sort(sortByName).map( manager => manager.taxNumber );
  }
  
  /**
   * Function Challenge N2
   * @param {Array} paddockTypeArray Arreglo con los tipos de productos plantados
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Array} Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
   */  
  export const sortPaddockTypeByTotalArea = (paddockTypeArray = paddockType, paddocksArray = paddocks) => {
    const result = {};

    for (const { name, id } of paddockTypeArray) {
      result[name]= 0;
      for (const {paddockTypeId, area} of paddocksArray) {
        if( id === paddockTypeId ) result[name] += area;
      }
    }

    return Object.entries(result).sort((a, b)=> b[1] - a[1]).map(name => name[0]);
  }

  /**
   * Function Challenge N3
   * @param {Array} paddockManagersArray Arreglo con los managers
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Array} Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
   */  
  export const sortFarmManagerByAdminArea = (
    paddockManagersArray = paddockManagers,
    paddocksArray = paddocks
  ) => {
    const rankManager = paddockManagersArray.map(manager => {
      
      const auxTotal = paddocksArray
                          .filter( paddock => paddock.paddockManagerId === manager.id )
                          .map(paddock => paddock.area)
                          .reduce((a, b) => a + b, 0);
      
      return { managerName: manager.name, totalArea: auxTotal }                    
    })

    return rankManager.sort((a, b) => b.totalArea - a.totalArea).map(manager => manager.managerName);

  }
  
  /**
   * Function Challenge N4
   * @param {Array} farmsArray Arreglo con los nombres de los campos.
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Object} Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
   */  
  export const farmManagerNames = (
    farmsArray = farms, paddocksArray = paddocks
  ) => {
    
    const farmManagers = {}

    for (const {id, name} of farmsArray) {
      farmManagers[name] = []
      for (const {farmId, paddockManagerId} of paddocksArray) {
        if(id === farmId) farmManagers[name].push(paddockManagers.find(manager => manager.id ===paddockManagerId))
      }
      farmManagers[name] = [
        ...new Set(
          farmManagers[name]
            .sort(sortByName)
            .map(manager => manager.taxNumber)
        )
      ]
    }

    return farmManagers
  }
  
  /**
   * Function Challenge N5
   * @param {Array} paddockTypeArray Arreglo con los tipos de productos plantados
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Array} Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
   */    
  export const biggestAvocadoFarms = (paddockTypeArray = paddockType, paddocksArray = paddocks) => {
    const idAvocado = paddockTypeArray.find(paddock => paddock.name === 'PALTOS').id;
    const result = {}

    for (const {paddockTypeId, area, farmId} of paddocksArray) {  
      result[farmId] = result[farmId] || 0;
      if(paddockTypeId === idAvocado) result[farmId] += area
    }
   
    return Object.values(result).filter(area => area > 20000).sort((a, b)=> b - a)
  }
  
  /**
   * Function Challenge N6
   * @param {Array} farmsArray Arreglo con los nombres de los campos.
   * @param {Array} paddockTypeArray Arreglo con los tipos de productos plantados
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Array} Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas en ese mismo campo.
   */  
  export const biggestCherriesManagers = ( farmsArray = farms, paddockTypeArray = paddockType, paddocksArray = paddocks) => {
    const idFarm = farmsArray.find(farm => farm.name === 'FORESTAL Y AGRICOLA LO ENCINA').id;
    const idPaddockType = paddockTypeArray.find( type => type.name === 'CEREZAS' ).id

    const result = {}
    for (const {paddockTypeId, area, farmId, paddockManagerId} of paddocksArray) {
      result[paddockManagerId] = result[paddockManagerId] || 0
      if(paddockTypeId === idPaddockType && idFarm === farmId) result[paddockManagerId] += area
    }

    return Object.entries(result).sort((a,b) => b - a ).filter(area => area[1] > 1000).map(manager => paddockManagers.find(managers => managers.id == manager[0]).name)
  }
  
  /**
   * Function Challenge N7
   * @param {Array} paddockManagersArray Arreglo con los managers
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Object} Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente.
   */ 
  export const farmManagerPaddocks = (paddockManagersArray = paddockManagers, paddocksArray = paddocks) => {
    const farmManagers = {}
    
    for (const {id, name} of paddockManagersArray) {
      farmManagers[name] = []
      for (const {farmId, paddockManagerId} of paddocksArray) {
        if(id === paddockManagerId) farmManagers[name].push(farms.find(farm => farm.id === farmId))
      }
      farmManagers[name] = [
        ...new Set(
            farmManagers[name]
              .sort((a, b) => a.name.localeCompare(b.name))
              .map(farm => farm.name)
        )
      ]  
    }
    return farmManagers
  }
  
   /**
   * Function Challenge N8
   * @param {Array} paddockTypeArray Arreglo con los tipos de productos plantados
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Object} Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
   */  
  export const paddocksManagers = (paddockTypeArray = paddockType, paddocksArray = paddocks) => {
    let harvest = {}

    paddockTypeArray.map(type => {
      return paddocksArray.map(paddock => {
        const harvestManager = paddockManagers.find(
          manager => manager.id === paddock.paddockManagerId
        ) 
        return (
          harvest = {
            ...harvest,
            [`${type.name}-${paddock.harvestYear}`]: {[harvestManager.id]: harvestManager.name}
          }
        )
      })
    })

    return harvest;
  }
  
  /**
   * Function Challenge N9
   * @param {Array} paddockManagersArray Arreglo con los managers
   * @param {Array} paddocksArray Arreglo con paddocks.
   * @returns {Number}
   */
  // 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
  // Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
  // No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
  export const newManagerRanking = (paddockManagersArray = paddockManagers, paddocksArray = paddocks) => {
    const newPaddockManager = { id: 7, taxNumber: "28484387", name: "JUAN PEDRO DOE" };
    const newPaddock = {
      paddockManagerId: 7,
      farmId: 1,
      paddockTypeId: 4,
      harvestYear: 2017,
      area: 900,
    }
   
    const auxPaddockManagers = [...paddockManagersArray, newPaddockManager]
    const auxPaddock = [...paddocksArray, newPaddock]

    return sortFarmManagerByAdminArea(auxPaddockManagers, auxPaddock).indexOf(newPaddockManager.name) + 1;

  }

  /**
   * Función callback para ordenar nombres por alfabeto, ingresando dentro de un sort.
   * @param {String} a Primer nombre
   * @param {String} b Segundo nombre
   * @returns 
   */
   // Versión con localCompare.
  const sortByName = (a, b) => a.name.localeCompare(b.name)
  // Versión con ternario.
  // const sortByName = (a, b) => a.name > b.name ? 1 : -1
  
  // No modificar, eliminar o alterar cualquier línea de código o comentario de acá para abajo
  
  console.log("Pregunta 0");
  console.log(listPaddockManagerIds());
  console.log("Pregunta 1");
  console.log(listPaddockManagersByName());
  console.log("Pregunta 2");
  console.log(sortPaddockTypeByTotalArea());
  console.log("Pregunta 3");
  console.log(sortFarmManagerByAdminArea());
  console.log("Pregunta 4");
  console.log(farmManagerNames());
  console.log("Pregunta 5");
  console.log(biggestAvocadoFarms());
  console.log("Pregunta 6");
  console.log(biggestCherriesManagers());
  console.log("Pregunta 7");
  console.log(farmManagerPaddocks());
  console.log("Pregunta 8");
  console.log(paddocksManagers());
  console.log("Pregunta 9");
  console.log(newManagerRanking());
  