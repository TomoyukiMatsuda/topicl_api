import "reflect-metadata"
import { DataSource } from "typeorm"
import {GeneralTopicEntity} from "./entity/GeneralTopic";
import {User} from "./entity/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "topicl",
    password: '',
    database: 'topicl',
    synchronize: false,
    logging: true,
    entities: [User, GeneralTopicEntity],
    migrations: [],
    subscribers: [],
});
