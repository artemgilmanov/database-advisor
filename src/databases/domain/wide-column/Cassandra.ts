import {AllHostingOptions, Database} from "@/databases/domain/types";
import WideColumn from "@/databases/domain/wide-column/WideColumn";

const Cassandra:Database = {
    ...WideColumn,
    name: "Cassandra",
    hostingOptions: AllHostingOptions, 
    licenses: [], 
}

export default Cassandra;