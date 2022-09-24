import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column()
    username: string

    @Column({select: false})
    passwordHash: string

    @CreateDateColumn()
    createdAt: Date

}
