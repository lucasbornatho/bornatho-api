import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class GENERO{
    @PrimaryColumn()
    ID:string;

    @Column({length: 255})
    NOME:string;

    @Column({length: 255})
    DESCRICAO:string;
}