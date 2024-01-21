import { FundUnit } from "@/models/fundUnit.model";

export interface Filter {
  fundUnitList?: FundUnit[];
  startDate?: string;
  endDate?: string;
}
