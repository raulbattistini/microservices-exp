import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity("user")
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
