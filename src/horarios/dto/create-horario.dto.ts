import { Usuario } from "src/usuarios/usuario.entity";


export class CreateHorarioDto {
    hora: string;
    estado: boolean;
    fecha: Date;
    cancha_id?: number;
    usuario_id?: Usuario;
}
