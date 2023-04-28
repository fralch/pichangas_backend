//crear entidad para horario de reservas de canchas de futbol
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import {Usuario} from './../../usuarios/usuario.entity';

@Entity()
export class Horario {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({type: "varchar", length: 10})
    hora: string;

    @Column({type: "boolean", default: true})
    estado: boolean;

    @Column({type: "date"})
    fecha: Date;

    @Column({type: "int"})
    cancha_id: number;


    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    cretedAt: Date;

    @ManyToOne(() => Usuario, usuario => usuario.horario_id)
    @JoinColumn({name: "usuario_id"})
    usuario_id: Usuario;


  
}
