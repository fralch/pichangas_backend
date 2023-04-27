import {Entity, Column} from "typeorm";

@Entity()
export class Usuario{
    @Column({primary: true, generated: true})
    id: number;

    @Column({unique: true})
    usuario: string;

    @Column()
    nombre: string;

    @Column()
    apellido: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({nullable: true})
    foto: string;

    @Column()
    telefono: string;

    @Column()
    direccion: string;

    @Column()
    estado: boolean;

    @Column({type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    cretedAt: Date;
}

