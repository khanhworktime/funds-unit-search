import { FundUnit } from "@/models/fundUnit.model";

export const fundLegendColors = (fundList: FundUnit[]) =>
  fundList.map((f) => {
    switch (f.name) {
      case "conservation":
        return "#FED141";
      case "growth":
        return "#E87722";
      case "balance":
      default:
        return "#6ECEB2";
    }
  });
