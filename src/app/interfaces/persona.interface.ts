export interface Persona {
    id_persona?:  number;
    primer_nombre:  string;
    segundo_nombre:  string;
    primer_apellido:  string;
    segundo_apellido:  string;
    identificacion:  string;
    direccion:  string;
    celular:  string;
    telefono:  string;
    id_ciudad_fk:  number | string;
    id_tipo_identificacion_fk:  number | string;
    id_cargo_fk:  number | string;
    ciudad?: string;
    cargo?: string;
    tipo_identificacion?: string;
}

export interface Req {
    datos: any;
    status: number;
}