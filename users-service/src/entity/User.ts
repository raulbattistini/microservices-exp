import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    username: string

    @Column({select: false})
    passwordHash: string

    @CreateDateColumn()
    createdAt: Date

}
