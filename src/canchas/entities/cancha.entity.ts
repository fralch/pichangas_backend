import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToMany } from 'typeorm';
import { Horario } from '../../horarios/entities/horario.entity';
import { type } from 'os';


@Entity()
export class Cancha {
    @PrimaryGeneratedColumn({type: "int"})
    id: number;

    @Column({unique: true})
    usuario: string;

    @Column()
    cancha: string;

    @Column()
    direccion: string;

    @Column()
    horario: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({type: "longtext", nullable: true})
    fotos: string;

    @Column()
    telefono: string;


    @Column()
    estado: boolean;

    
    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    cretedAt: Date;

    @OneToMany(() => Horario, horario => horario.cancha_id)
    @JoinColumn({name: "horario_id"})
    horario_id: Horario;


}
