import {
  listPaddockManagerIds,
listPaddockManagersByName,
sortPaddockTypeByTotalArea,
sortFarmManagerByAdminArea,
farmManagerNames,
biggestAvocadoFarms,
biggestCherriesManagers,
farmManagerPaddocks,
paddocksManagers,
newManagerRanking,
} from '../src/functions/challenge'

describe("Javascript Challenge", () => {
  
  test("Pregunta N0 - listPaddockManagerIds", () => {
    const resp = [1, 2, 3, 4, 5, 6];
    expect(listPaddockManagerIds()).toEqual(resp);
  });

  test("Pregunta N1 - listPaddockManagersByName", () => {
    expect(listPaddockManagersByName()).toStrictEqual([
      '176812737',      
      '78903228',       
      '143618668',      
      '78684747',       
      '132254524',
      '216352696'
    ]);
  });

  test("Pregunta N2 - sortPaddockTypeByTotalArea", () => {
    expect(sortPaddockTypeByTotalArea()).toStrictEqual(['AVELLANOS', 'PALTOS', 'CEREZAS', 'NOGALES']);
  });

  test("Pregunta N3 - sortFarmManagerByAdminArea", () => {
    expect(sortFarmManagerByAdminArea()).toStrictEqual([
      'OSCAR PEREZ ZUÑIGA',
      'CARLOS PEREZ GONZALEZ',
      'EFRAIN SOTO VERA',
      'JOAQUIN ANDRADE SANDOVAL',
      'JUAN TAPIA BURGOS',
      'ANDRES VIÑALES CIENFUEGOS'
    ]);
  });

  test("Pregunta N4 - farmManagerNames", () => {
    expect(farmManagerNames()).toStrictEqual({
      'AGRICOLA SANTA ANA': [ '78903228', '143618668', '78684747', '216352696' ],
      'VINA SANTA PAULA': [ '78903228', '143618668', '132254524', '216352696' ],
      'FORESTAL Y AGRICOLA LO ENCINA': [ '176812737', '78903228', '143618668', '132254524', '216352696' ]
    });
  });

  test("Pregunta N5 - biggestAvocadoFarms", () => {
    expect(biggestAvocadoFarms()).toStrictEqual([ 23925, 21914 ]);
  });

  test("Pregunta N6 - biggestCherriesManagers", () => {
    expect(biggestCherriesManagers()).toStrictEqual([
      'CARLOS PEREZ GONZALEZ',
      'JOAQUIN ANDRADE SANDOVAL',
      'JUAN TAPIA BURGOS',
      'OSCAR PEREZ ZUÑIGA'
    ]);
  });

  test("Pregunta N7 - farmManagerPaddocks", () => {
    expect(farmManagerPaddocks()).toStrictEqual({
      'ANDRES VIÑALES CIENFUEGOS': [ 'FORESTAL Y AGRICOLA LO ENCINA' ],
      'CARLOS PEREZ GONZALEZ': [
        'AGRICOLA SANTA ANA',
        'FORESTAL Y AGRICOLA LO ENCINA',
        'VINA SANTA PAULA'
      ],
      'EFRAIN SOTO VERA': [
        'AGRICOLA SANTA ANA',
        'FORESTAL Y AGRICOLA LO ENCINA',
        'VINA SANTA PAULA'
      ],
      'JOAQUIN ANDRADE SANDOVAL': [ 'AGRICOLA SANTA ANA' ],
      'JUAN TAPIA BURGOS': [ 'FORESTAL Y AGRICOLA LO ENCINA', 'VINA SANTA PAULA' ],
      'OSCAR PEREZ ZUÑIGA': [
        'AGRICOLA SANTA ANA',
        'FORESTAL Y AGRICOLA LO ENCINA',
        'VINA SANTA PAULA'
      ]
    });
  });

  test("Pregunta N8 - paddocksManagers", () => {
    expect(paddocksManagers()).toStrictEqual({
      'PALTOS-2019': { '2': 'EFRAIN SOTO VERA' },
      'PALTOS-2020': { '4': 'ANDRES VIÑALES CIENFUEGOS' },
      'PALTOS-2021': { '2': 'EFRAIN SOTO VERA' },
      'PALTOS-2017': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'PALTOS-2018': { '2': 'EFRAIN SOTO VERA' },
      'PALTOS-2029': { '1': 'JUAN TAPIA BURGOS' },
      'PALTOS-2010': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'PALTOS-2012': { '6': 'JOAQUIN ANDRADE SANDOVAL' },
      'AVELLANOS-2019': { '2': 'EFRAIN SOTO VERA' },
      'AVELLANOS-2020': { '4': 'ANDRES VIÑALES CIENFUEGOS' },
      'AVELLANOS-2021': { '2': 'EFRAIN SOTO VERA' },
      'AVELLANOS-2017': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'AVELLANOS-2018': { '2': 'EFRAIN SOTO VERA' },
      'AVELLANOS-2029': { '1': 'JUAN TAPIA BURGOS' },
      'AVELLANOS-2010': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'AVELLANOS-2012': { '6': 'JOAQUIN ANDRADE SANDOVAL' },
      'CEREZAS-2019': { '2': 'EFRAIN SOTO VERA' },
      'CEREZAS-2020': { '4': 'ANDRES VIÑALES CIENFUEGOS' },
      'CEREZAS-2021': { '2': 'EFRAIN SOTO VERA' },
      'CEREZAS-2017': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'CEREZAS-2018': { '2': 'EFRAIN SOTO VERA' },
      'CEREZAS-2029': { '1': 'JUAN TAPIA BURGOS' },
      'CEREZAS-2010': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'CEREZAS-2012': { '6': 'JOAQUIN ANDRADE SANDOVAL' },
      'NOGALES-2019': { '2': 'EFRAIN SOTO VERA' },
      'NOGALES-2020': { '4': 'ANDRES VIÑALES CIENFUEGOS' },
      'NOGALES-2021': { '2': 'EFRAIN SOTO VERA' },
      'NOGALES-2017': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'NOGALES-2018': { '2': 'EFRAIN SOTO VERA' },
      'NOGALES-2029': { '1': 'JUAN TAPIA BURGOS' },
      'NOGALES-2010': { '5': 'OSCAR PEREZ ZUÑIGA' },
      'NOGALES-2012': { '6': 'JOAQUIN ANDRADE SANDOVAL' }
    });
  });

  test("Pregunta N9 - newManagerRanking", () => {
    expect(newManagerRanking()).toStrictEqual([
      'OSCAR PEREZ ZUÑIGA',
      'CARLOS PEREZ GONZALEZ',
      'EFRAIN SOTO VERA',
      'JOAQUIN ANDRADE SANDOVAL',
      'JUAN TAPIA BURGOS',
      'ANDRES VIÑALES CIENFUEGOS',
      'JUAN PEDRO DOE'
    ]);
  });

});
