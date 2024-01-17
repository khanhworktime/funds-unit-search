import { FundUnit } from "@/models/fundUnit.model";

interface DataRecord {
  fundUnit: FundUnit;
  value: number;
}

export interface Data {
  date: string;
  records: DataRecord[];
}
