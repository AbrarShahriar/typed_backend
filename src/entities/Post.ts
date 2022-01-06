import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import User from "./User";

@Entity() 
export default class Post extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: String

    @Column()
    title: String

    @Column()
    body: String

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => User, user => user.posts)
    user: User
}