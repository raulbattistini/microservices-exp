import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"


@Entity()
export class Photo {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column()
    name: string

    @Column({select: false})
    filename: string

    @CreateDateColumn()
    isPublished: boolean

}
