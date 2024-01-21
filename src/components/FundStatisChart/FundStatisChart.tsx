import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { FundListFilterContext } from "@/Context";
import { useContext, useMemo } from "react";
import {
  BarController,
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";
import { fundLegendColors } from "@/utils/fundLegendColors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  BarController,
  Tooltip,
  Legend,
  ChartDataLabels,
);

const options: ChartOptions<"bar"> = {
  maintainAspectRatio: false,
  indexAxis: "y",
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      anchor: "end",
      offset: -60,
      align: "start",
      font: {
        weight: "bold",
      },
      formatter: (value: number) =>
        `${value > 0 ? "+" : ""}${value.toFixed(2)}%`,
    },
  },
  scales: {
    x: {
      ticks: {
        font: {
          size: 12,
          weight: "bold",
        },
        stepSize: 25,
      },
      suggestedMin: -50,
      suggestedMax: 100,
    },
    y: {
      ticks: {
        font: {
          size: 18,
          weight: "bold",
        },
        crossAlign: "far",
        color: "#000",
      },
      grid: {
        display: false,
      },
    },
  },
};

export function FundStatisChart() {
  // Get fundList filtered
  const fundList = useContext(FundListFilterContext);

  // Get data

  const labels = fundList.map((f) => f.label);
  const bgColors = fundLegendColors(fundList);

  const data: ChartData<"bar"> = useMemo(
    () => ({
      labels,
      datasets: [
        {
          data: [75, -25, 25],
          backgroundColor: bgColors,
          borderWidth: 0,
          barThickness: 30,
          barPercentage: 10,
          categoryPercentage: 10,
        },
      ],
    }),
    [bgColors, labels],
  );
  return (
    <div className={"chartWrapper"}>
      <Bar
        options={options}
        data={data}
        plugins={[ChartDataLabels]}
        id={"FundStatisChart"}
        redraw={true}
      ></Bar>
    </div>
  );
}
