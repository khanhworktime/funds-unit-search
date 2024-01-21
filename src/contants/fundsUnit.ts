import { FundUnit } from "@/models/fundUnit.model";

export const growthFund: FundUnit = {
  label: "Quỹ Tăng trưởng",
  name: "growth",
};

export const balanceFund: FundUnit = {
  label: "Quỹ Cân bằng",
  name: "balance",
};

export const conservationFund: FundUnit = {
  label: "Quỹ Bảo toàn",
  name: "conservation",
};

export const baseFundsUnitList = [growthFund, balanceFund, conservationFund];
