//crear entidad para horario de reservas de canchas de futbol
export class Horario {
    id: number;
    hora: string;
    estado: boolean;
    fecha: Date;
    cancha_id: number;
    usuario_id: number;
    constructor(id: number, hora: string, estado: boolean, fecha: Date, cancha: number, usuario: number) {
        this.id = id;
        this.hora = hora;
        this.estado = estado;
        this.fecha = fecha;
        this.cancha_id = cancha;
        this.usuario_id = usuario;
    }

    
}
