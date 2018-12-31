export interface Pregunta {
    pregunta: string;
    id: number;
    respuestas: Respuesta[];
}

interface Respuesta{
  respuesta: string;
    id: number;
    pregunta: string;
    bandera: boolean;
}