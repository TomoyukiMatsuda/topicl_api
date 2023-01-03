import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "topicl",
    password: '',
    database: 'test',
    synchronize: false,
    logging: true,
    entities: [User],
    migrations: [],
    subscribers: [],
});
