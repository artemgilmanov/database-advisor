import {Database} from "../types";
import KeyValue from "@/databases/domain/key-value/KeyValue";

const Redis: Database = {
    ...KeyValue,
    name: 'Redis',
    hostingOptions: []
}

export default Redis;