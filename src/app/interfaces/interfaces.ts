export interface RespuestaTrans {
  ok: boolean;
  pagina: number;
  transf: Transf[];
}

export interface Transf {
  _id?: string;
  mensaje?: string;
  cuenta?: string;
  numerocuenta?: string;
  cuantotransfiere?: string;
  moneda?: string;
  usuario?: Usuario;
  created?: string;
}

export interface Usuario {
  _id?: string;
  nombre?: string;
  email?: string;
  tipocuenta?: string;
  numerocuenta?: string;
}