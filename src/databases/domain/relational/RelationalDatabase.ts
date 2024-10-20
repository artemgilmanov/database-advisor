import {ConsistencyModels, DbModels} from "@/databases/domain/types";

const RelationalDatabase = {
    licenses: [],
    primaryModel: DbModels.Relational,
    consistencyModels: [ConsistencyModels.ACID],
    pc: true,
    ec: true
}

export default RelationalDatabase;