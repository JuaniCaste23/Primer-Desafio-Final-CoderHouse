interface AlumnoContract {
  id: number;
  nombre: string;
  apellido: string;
  carrera: string;
  boolean: boolean;

}

export class AlumnoModel implements AlumnoContract{

  id: number;
  nombre: string;
  apellido: string;
  carrera: string;
  boolean: boolean;


  constructor(id: number, nombre: string, apellido: string, carrera: string, boolean: boolean)
  {
    this.id = id;
    this.nombre = nombre;
    this.apellido = apellido;
    this.carrera = carrera;
    this.boolean = boolean;
  }

}
