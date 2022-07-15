import { generarFolio } from '../../../helpers/generarFolio';
import { CODIGO_200, RESPUESTA_EXITOSA } from '../../constantes';

export const RESPUESTA_PRODUCTOS = {
  status: CODIGO_200,
  schema: {
    properties: {
      codigo: { type: 'string', example: '200.AppEvaluation-CDT' },
      mensaje: { type: 'string', example: RESPUESTA_EXITOSA },
      folio: { type: 'string', example: generarFolio() },
      resultado: {
        type: 'array',
        example: {
          productos: [
            {
              "id": 1,
              "name": "Microsoft Xbox Series S 512GB Standard color blanco",
              "price": 5999.99,
              "withDiscount": null,
              "description": "Con tu consola Xbox Series tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \r\n\r\nLa nueva generación de consolas está comandada por la Xbox Series que llegó al mercado para sorprender a todos. Su potencia y alto rendimiento te permitirá reducir las horas de descarga de juegos y contenido de manera considerable en comparación con otras consolas. Además, vas a poder jugar durante horas mientras te diviertes con jugadores de todo el mundo.\r\n\r\nAdaptada a tus necesidades\r\nGuarda tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 512 GB. \r\nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras juegas.\r\n\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables. ",
              "categoryId": 1,
              "stock": 999,
              "img": "https://http2.mlstatic.com/D_Q_NP_2X_771415-MLA44492818319_012021-AB.jpg",
              "options": "[\"512 GB\", \"1 TB\"]"
            }, {
              "id": 2,
              "name": "Sony PlayStation 5 825GB Standard color blanco y negro",
              "price": 13999,
              "withDiscount": 10999,
              "description": "Con tu consola PlayStation 5 tendrás entretenimiento asegurado todos los días. Su tecnología fue creada para poner nuevos retos tanto a jugadores principiantes como expertos. \r\n\r\nPlayStation renovó las expectativas del mundo virtual con esta nueva consola y su gran rendimiento. Cuenta con una interfaz de usuario más rápida y fácil de navegar que en anteriores modelos. Además, podrás jugar durante horas desafiando a millones de contrincantes alrededor del mundo que esperan nuevos retos.\r\n\r\nCalidad de otro nivel\r\nSe considera que esta consola es de las mejores dentro del mercado, dado que presenta una resolución de hasta 4K.\r\n\r\nAdemás, el control DualSense para PS5 combina estilo y tecnología para que jugar sea más cómodo e interactivo para todos sus jugadores.\r\n\r\nAdaptada a tus necesidades\r\nGuarda tus apps, fotos, videos y mucho más en el disco duro, que cuenta con una capacidad de 825 GB. \r\nAl contar con un procesador de 8 núcleos y uno gráfico, brinda una experiencia dinámica, respuestas ágiles, y transiciones fluidas de imágenes en alta definición.\r\nPor otro lado, tiene puerto USB y salida HDMI, que permiten conectar accesorios y cargar la batería de tu control mientras juegas.\r\n\r\nVas a poder reproducir música, ver tus películas y series favoritas a través de las aplicaciones descargables. ",
              "categoryId": 1,
              "stock": 5,
              "img": "https://http2.mlstatic.com/D_Q_NP_2X_937072-MLA44492746273_012021-R.jpg",
              "options": null
            }
          ],
        },
      },
    },
  }
};
