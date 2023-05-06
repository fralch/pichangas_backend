import {Entity, Column, OneToMany, JoinColumn} from "typeorm";
import { Horario } from "../horarios/entities/horario.entity"

@Entity()
export class Usuario{
    @Column({primary: true, generated: true})
    id: number;

    @Column({nullable: true})
    usuario: string;

    @Column()
    nombre: string;

    @Column({nullable: true})
    apellido: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    foto: string;

    @Column({nullable: true})
    telefono: string;

    @Column({nullable: true})
    direccion: string;

    @Column()
    estado: boolean;

    
    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    cretedAt: Date;

    @OneToMany(() => Horario, horario => horario.usuario_id)
    @JoinColumn({name: "horario_id"})
    horario_id: Horario[];
}

