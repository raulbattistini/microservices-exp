import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from "typeorm"

@Entity("userssesions")
export class UserSession {

    @PrimaryGeneratedColumn("uuid")
    id: string

    @Column("char", {length: 36})
    userId: string

    @CreateDateColumn()
    createdAt: Date

    @Column()
    expiresAt: string

}
