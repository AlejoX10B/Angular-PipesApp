
export enum Color {
  rojo,
  negro,
  azul,
  verde
}

export interface Hero {
  name: string;
  flies: boolean;
  color: Color;
}
