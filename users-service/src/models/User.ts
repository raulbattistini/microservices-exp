import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("user")
export class User {
  name: User
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  username: string;

  @Column({ select: false })
  passwordHash: string;

  @CreateDateColumn()
  createdAt: string;
}
