import { CODIGO_200, CODIGO_201 } from "../config/constantes";

export const validarRespuesta = (respuesta, codigoRespuesta: number) => {
  switch (codigoRespuesta) {
    case CODIGO_200:
    case CODIGO_201:
      delete respuesta.codigo;
      return respuesta;
    default:
      return respuesta;
  }
}