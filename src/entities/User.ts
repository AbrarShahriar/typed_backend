import { Field, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Post from "./Post";

export enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other'
}

@Entity()
@ObjectType() 
export default class User extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    @Field()
    id: String

    @Column({
        length: 32,
        unique: true
    })
    @Field()
    username: String

    @Column({
        length: 255
    })
    password: String

    @Column({
        type: 'enum',
        enum: Gender,
        default: Gender.OTHER
    })
    @Field()
    gender: Gender

    @Column({
        default: 15,
        nullable: true
    })
    @Field()
    age: number

    @OneToMany(() => Post, post => post.user)
    posts: [Post]
}