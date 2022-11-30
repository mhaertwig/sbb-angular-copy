import {
  SbbMarkerCategory,
  SbbRouteMetaInformation,
  SbbSelectableFeatureCollection,
} from '@sbb-esta/journey-maps';

export const bielLyssRoutesOptions: SbbRouteMetaInformation[] = [
  {
    id: '1',
    midpointMarkerConfiguration: {
      category: SbbMarkerCategory.RAIL,
      title: 'Marker',
      color: 'DARKBLUE',
    },
  },
];

export const bielLyssRoutes: SbbSelectableFeatureCollection[] = [
  {
    id: '1',
    isSelected: true,
    type: 'FeatureCollection',
    bbox: [7.242365, 47.0761137, 7.3186937, 47.1322689],
    features: [
      {
        type: 'Feature',
        properties: {
          station_from: {
            id: '8504414',
            latitude: 7.3064969,
            longitude: 47.0761137,
            name: 'Lyss',
            platform: '1',
            ident_source: 'sbb',
          },
          station_to: {
            id: '8504300',
            latitude: 7.242365,
            longitude: 47.1322689,
            name: 'Biel/Bienne',
            platform: '10',
            ident_source: 'sbb',
          },
          external_node_id_to: '',
          transportType: 'rail',
          type: 'path',
          pathType: 'transport',
          external_node_id_from: '',
          lines: [
            {
              name: 'S 3',
              prob: 0.9790058645,
            },
            {
              name: 'IR 65',
              prob: 0.9717366854,
            },
            {
              name: '291',
              prob: 0.2102322439,
            },
            {
              name: 'S 3',
              prob: 0.012835162,
            },
          ],
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            [7.3064969, 47.0761137],
            [7.3047783, 47.0793961],
            [7.3047233, 47.0795205],
            [7.3046592, 47.079706],
            [7.3046262, 47.079841],
            [7.3045987, 47.0802125],
            [7.304632, 47.0807648],
            [7.3046234, 47.0810386],
            [7.3046292, 47.0813201],
            [7.3046668, 47.0815521],
            [7.3047682, 47.0818819],
            [7.3048192, 47.0819994],
            [7.3049482, 47.0822235],
            [7.3050986, 47.0824311],
            [7.3053649, 47.0827186],
            [7.3123074, 47.0892043],
            [7.3125542, 47.0894426],
            [7.3129142, 47.0898316],
            [7.3133838, 47.0904049],
            [7.3137876, 47.0909766],
            [7.3163566, 47.0952194],
            [7.316653, 47.0957159],
            [7.3169106, 47.096175],
            [7.3175415, 47.0974223],
            [7.3177421, 47.0977768],
            [7.3181082, 47.0983765],
            [7.3183849, 47.0988603],
            [7.3184463, 47.0989922],
            [7.3185728, 47.0993436],
            [7.3186614, 47.0997365],
            [7.3186789, 47.0999016],
            [7.3186937, 47.1002716],
            [7.3186866, 47.1004673],
            [7.3186497, 47.1007265],
            [7.3186186, 47.1008707],
            [7.3185148, 47.1011873],
            [7.318442, 47.1013626],
            [7.3183381, 47.1015777],
            [7.3182369, 47.1017546],
            [7.3180149, 47.102088],
            [7.3177797, 47.1023725],
            [7.3176628, 47.1025005],
            [7.3173844, 47.1027643],
            [7.3171906, 47.102924],
            [7.3169876, 47.1030765],
            [7.3165646, 47.1033463],
            [7.3163745, 47.1034498],
            [7.315958, 47.1036579],
            [7.3154705, 47.1038625],
            [7.314678, 47.1041609],
            [7.3092243, 47.1060732],
            [7.3087456, 47.1062483],
            [7.3080192, 47.1065277],
            [7.307513, 47.1067327],
            [7.3070188, 47.1069455],
            [7.3065299, 47.1071647],
            [7.3060353544, 47.1073992301],
            [7.3050964, 47.1078534],
            [7.3047155, 47.1080458],
            [7.3044683, 47.1081777],
            [7.3038821, 47.1085213],
            [7.3034436, 47.1088104],
            [7.3029953, 47.1091413],
            [7.3025762, 47.1094892],
            [7.3022796, 47.1097599],
            [7.3018406, 47.1101947],
            [7.3016574878, 47.110403284],
            [7.3008331, 47.1114394],
            [7.3006398, 47.1116977],
            [7.2990893, 47.1136377],
            [7.2987823, 47.1139747],
            [7.2984562, 47.1143022],
            [7.2980117, 47.1146973],
            [7.2977072, 47.114936],
            [7.2972576, 47.1152674],
            [7.296742, 47.1155989],
            [7.2960705, 47.1159799],
            [7.2958117, 47.1161102],
            [7.2953206, 47.1163406],
            [7.2950932, 47.1164415],
            [7.29462, 47.1166315],
            [7.2939423, 47.1168681],
            [7.293219, 47.117083],
            [7.2927158, 47.117207],
            [7.2920265, 47.1173551],
            [7.2886818, 47.1180269],
            [7.2872392, 47.1183242],
            [7.2867733, 47.1184373],
            [7.2864212, 47.1185378],
            [7.286081, 47.1186479],
            [7.285424, 47.1188978],
            [7.2849154, 47.1191326],
            [7.2844392, 47.1193923],
            [7.2842292, 47.1195216],
            [7.2838208, 47.1197873],
            [7.2821864, 47.1208876],
            [7.2815978, 47.1213039],
            [7.2805811, 47.1220026],
            [7.2804429, 47.1221076],
            [7.2795277, 47.122733],
            [7.2792614, 47.1229038],
            [7.2788299, 47.1231468],
            [7.2785007, 47.123308],
            [7.2781571, 47.1234547],
            [7.277704, 47.1236186],
            [7.2774277, 47.1237049],
            [7.2768568, 47.1238563],
            [7.276568, 47.1239167],
            [7.2760601, 47.1239968],
            [7.2757682, 47.1240308],
            [7.2753745, 47.1240615],
            [7.27499, 47.1240746],
            [7.2744584, 47.1240688],
            [7.2740399, 47.1240458],
            [7.2712733, 47.1238185],
            [7.2683112, 47.1235943],
            [7.2675366, 47.1235528],
            [7.2669513, 47.1235507],
            [7.2666292, 47.1235635],
            [7.2663042, 47.1235862],
            [7.2658885, 47.1236311],
            [7.2652597, 47.123726],
            [7.2647774, 47.1238255],
            [7.2645131, 47.1238895],
            [7.2640372, 47.1240246],
            [7.2635787, 47.1241793],
            [7.2631141, 47.1243616],
            [7.2621837, 47.1248283],
            [7.2620214, 47.1249163],
            [7.2618144, 47.1250466],
            [7.2614287, 47.1253201],
            [7.2610561, 47.1256259],
            [7.2607672, 47.1258928],
            [7.2604609, 47.1262206],
            [7.2587494, 47.1282651],
            [7.2585259, 47.1285087],
            [7.2583165, 47.1287064],
            [7.2580493, 47.1289222],
            [7.2577721, 47.1291157],
            [7.2574689, 47.1292952],
            [7.2572614932, 47.1294019387],
            [7.2570012, 47.1295234],
            [7.2568095, 47.1296031],
            [7.2564575, 47.1297295],
            [7.2560924, 47.1298368],
            [7.2557167, 47.1299259],
            [7.2553251, 47.1299951],
            [7.254933, 47.1300428],
            [7.2544106865, 47.1300728828],
            [7.2541322, 47.1300768],
            [7.253647, 47.1300675],
            [7.2518762, 47.1300098],
            [7.2513116, 47.1300063],
            [7.2509826, 47.1300207],
            [7.2506505, 47.1300486],
            [7.2503362, 47.130088],
            [7.2499412, 47.1301573],
            [7.2494316, 47.1302787],
            [7.2488724679, 47.1304520236],
            [7.2466455, 47.1311782],
            [7.2436548, 47.1318606],
            [7.2434279, 47.1319228],
            [7.242365, 47.1322689],
          ],
        },
      },
      {
        type: 'Feature',
        properties: {
          type: 'midpoint',
        },
        geometry: {
          type: 'Point',
          coordinates: [7.2994824341468965, 47.11314582226865],
        },
      },
      {
        type: 'Feature',
        properties: {
          label: 'Lyss',
          transportType: 'rail',
          type: 'endpoint',
          endpointType: 'from',
        },
        geometry: {
          type: 'Point',
          coordinates: [7.3064969, 47.0761137],
        },
      },
      {
        type: 'Feature',
        properties: {
          label: 'Biel/Bienne',
          transportType: 'rail',
          type: 'endpoint',
          endpointType: 'to',
        },
        geometry: {
          type: 'Point',
          coordinates: [7.242365, 47.1322689],
        },
      },
    ],
  },
];
