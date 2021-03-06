import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    BaseEntity,
    ManyToMany,
    JoinTable,
    ManyToOne,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";
import { UserMaturityModel } from "./userMaturityModel";
import { User } from "./user";

@Entity()
export class Project {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
    })
    name: string;

    @Column("text", {
        nullable: true,
    })
    description: string;

    @ManyToOne(() => User, (user) => user.projects)
    user: User;

    @Column({ nullable: true })
    userId: number;

    @ManyToMany(() => UserMaturityModel, (maturityModel) => maturityModel.projects)
    @JoinTable()
    userMaturityModels: UserMaturityModel[];

    @CreateDateColumn()
    created: Date;

    @Column()
    creator: string;

    @UpdateDateColumn()
    updated: Date;

    @Column()
    updater: string;
}
