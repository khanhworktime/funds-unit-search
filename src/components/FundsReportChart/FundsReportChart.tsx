import { useContext, useMemo } from "react";
import { DataContext } from "@/Context/data.context";
import { FundsReportChartWrapper } from "@/components/FundsReportChart/fundsReportChart.style";
import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  registerables,
} from "chart.js";
import { FundListFilterContext } from "@/Context";
import { transformDataToChartDataset } from "@/utils";

ChartJS.register(...registerables);

const chartOption: ChartOptions<"line"> = {
  maintainAspectRatio: false,
  indexAxis: "x",
  interaction: {
    mode: "point",
    intersect: false,
  },
  plugins: {
    datalabels: {
      display: false,
    },
    legend: {
      position: "top",
      align: "end",
      labels: {
        boxWidth: 14,
        boxHeight: 14,
        font: {
          size: 16,
          weight: "bold",
        },
        color: "#000",
      },
    },
    tooltip: {
      mode: "point",
      position: "average",
      caretSize: 0,
      backgroundColor: "#000",
      borderColor: "#E87722",
      borderWidth: 1,
      boxWidth: 0,
      boxHeight: 0,
      callbacks: {
        title: (tooltipItem) => {
          return `Ngày: ${new Date(tooltipItem[0].label).toLocaleDateString(
            "vi-vn",
            { day: "2-digit", month: "2-digit", year: "numeric" },
          )}`;
        },
        label: (tooltipItem) => {
          return `Giá trị quỹ: ${tooltipItem.formattedValue}`;
        },
      },
      multiKeyBackground: "#fff",
    },
  },
  scales: {
    x: {
      ticks: {
        autoSkip: true,
        maxRotation: 0,
        font: {
          size: 16,
          weight: "bold",
        },
        callback: function (val, index) {
          // Hide every 2nd tick label
          if (typeof val !== "string")
            return index % 2 === 0
              ? new Date(this.getLabelForValue(val))
                  .toLocaleDateString("vi-vn", {
                    day: "2-digit",
                    month: "2-digit",
                  })
                  .replace("-", "/")
              : "";
        },
      },
    },
    y: {
      ticks: {
        font: {
          size: 16,
          weight: "bold",
        },
      },
    },
  },
};

export function FundsReportChart() {
  // Get data
  const dataList = useContext(DataContext);
  const fundsList = useContext(FundListFilterContext);

  const chartData: ChartData<"line"> = useMemo(
    () => ({
      labels: dataList.reverse().map((d) => d.date),
      datasets: transformDataToChartDataset({
        data: dataList.reverse(),
        fundsList,
      }),
    }),
    [dataList, fundsList],
  );

  return (
    <FundsReportChartWrapper>
      <Chart
        type={"line"}
        data={chartData}
        id={"FundsReportChart"}
        options={chartOption}
      />
    </FundsReportChartWrapper>
  );
}
