// Sección de declaraciones, NO EDITAR

// Responsables de los cuarteles
const paddockManagers = [
    { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
    { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
    { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
    { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
    { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
    { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
  ];
  
  // Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
  const paddockType = [
    { id: 1, name: 'PALTOS' },
    { id: 2, name: 'AVELLANOS' },
    { id: 3, name: 'CEREZAS' },
    { id: 4, name: 'NOGALES' },
  ]
  
  // Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
  const paddocks = [
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
    { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
    { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
    { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
    { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
    { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
    { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
    { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
    { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
    { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
    { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
    { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
    { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
    { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
  ];
  
  const farms = [
    { id: 1, name: 'AGRICOLA SANTA ANA' },
    { id: 2, name: 'VINA SANTA PAULA' },
    { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
  ];
  
  /*
    SECCIÓN PROBLEMAS
      - Las siguientes son preguntas básicas de Javascript y manejo de datos. 
      - Se debe programar un algoritmo para cada método y que este retorne lo requerido.
      - Debe usar nombres explicativos para sus variables.
      - Usar sintaxis ES6.     
      - Su prueba debe ejecutarse sin errores con: node nombre-apellido.js
      - Su prueba debe ejecutarse sin errores en la consola del inspector de Google Chrome
  */
  // Tip: Una hectárea equivale a 10.000m2
  
  
  // 0 Arreglo con los ids de los responsables de cada cuartel, ordenados de menor a mayor
  export const listPaddockManagerIds = () => {
    
  }
  
  // 1 Arreglo con los ruts de los responsables de los cuarteles, ordenados por nombre
  export const listPaddockManagersByName = () => {
    
  }
  
  // 2 Arreglo con los nombres de cada tipo de cultivo, ordenados decrecientemente por la suma TOTAL de la cantidad de hectáreas plantadas de cada uno de ellos.
  export const sortPaddockTypeByTotalArea = () => {
    
  }
  
  // 3 Arreglo con los nombres de los administradores, ordenados decrecientemente por la suma TOTAL de hectáreas que administran.
  export const sortFarmManagerByAdminArea = () => {
    
  }
  
  // 4 Objeto en que las claves sean los nombres de los campos y los valores un arreglo con los ruts de sus administradores ordenados alfabéticamente por nombre.
  export const farmManagerNames = () => {
   
  }
  
  // 5 Arreglo ordenado decrecientemente con los m2 totales de cada campo que tengan más de 2 hectáreas en Paltos
  export const biggestAvocadoFarms = () => {

  }
  
  // 6 Arreglo con nombres de los administradores de la FORESTAL Y AGRÍCOLA LO ENCINA, ordenados por nombre, que trabajen más de 1000 m2 de Cerezas
  export const biggestCherriesManagers = () => {
    
  }
  
  // 7 Objeto en el cual las claves sean el nombre del administrador y el valor un arreglo con los nombres de los campos que administra, ordenados alfabéticamente
  export const farmManagerPaddocks = () => {
    
  }
  
  // 8 Objeto en que las claves sean el tipo de cultivo concatenado con su año de plantación (la concatenación tiene un separador de guión ‘-’, por ejemplo AVELLANOS-2020) y el valor otro objeto en el cual la clave sea el id del administrador y el valor el nombre del administrador
  export const paddocksManagers = () => {
    
  }
  
  // 9 Agregar nuevo administrador con datos ficticios a "paddockManagers" y agregar un nuevo cuartel de tipo NOGALES con 900mts2, año 2017 de AGRICOLA SANTA ANA, administrado por este nuevo administrador
  // Luego devolver el lugar que ocupa este nuevo administrador en el ranking de la pregunta 3.
  // No modificar arreglos originales para no alterar las respuestas anteriores al correr la solución
  export const newManagerRanking = () => {
    
  }
  
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
  