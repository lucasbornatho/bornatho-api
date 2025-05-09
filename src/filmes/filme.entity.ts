import { GENERO } from "src/genero/genero.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

@Entity()
export class FILME{
    @PrimaryColumn()
    ID: string;

    @Column({length:255})
    NOME: string;

    @Column('int')
    DURACAO: number;

    @Column({length:255})
    SINOPSE: string;

    @Column('int')
    ANO: number;

    @ManyToOne(() => GENERO, genero => genero.filmes)
    @JoinColumn({name: "IDGENERO", referencedColumnName:"ID"})
    genero: GENERO;
    atores: any;
}