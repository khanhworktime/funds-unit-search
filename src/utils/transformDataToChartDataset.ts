import { Data } from "@/models";
import { FundUnit } from "@/models/fundUnit.model";
import { ChartDataset } from "chart.js";
import { fundLegendColors } from "@/utils/fundLegendColors";

interface TransformDataToChartDatasetProps {
  data: Data[];
  fundsList: FundUnit[];
}

export function transformDataToChartDataset({
  data,
  fundsList,
}: TransformDataToChartDatasetProps): ChartDataset<"line">[] {
  const dataset: ChartDataset<"line">[] = [];

  fundsList.forEach((f) => {
    dataset.push({
      label: f.label,
      data: [],
      borderColor: fundLegendColors([f])[0],
      backgroundColor: fundLegendColors([f])[0],
      pointHoverBorderColor: fundLegendColors([f])[0] + "60",
      pointHoverBorderWidth: 8,
    });
  });

  data.forEach((record) => {
    record.records.forEach((rec) => {
      //   Find index of fund in dataset
      const fundIndex = dataset.findIndex(
        (ds) => ds?.label === rec.fundUnit.label,
      );
      dataset[fundIndex]?.data.push(rec.value);
    });
  });

  return dataset;
}
