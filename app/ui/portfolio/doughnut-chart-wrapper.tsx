'use client'

import { useEffect } from "react";
import {
  Chart,
  DoughnutController,
  ArcElement,
  ChartItem
} from "chart.js";

Chart.register(DoughnutController, ArcElement);

export default function DoughnutChartWrapper(props: { name: string, percent: number }) {
  const { name, percent } = props;
  useEffect(() => {
    const type = "doughnut"
    const data = {
      datasets:[
        {
          data: [percent, 100-percent],
          backgroundColor: ['rgb(29 78 216)', "rgb(190,190,190)"],
          hoverBackgroundColor: ['rgb(30 58 138)', "rgb(190,190,190)"],
          borderWidth: 0,
        }
      ]
    }
    const option = {
      cutout: "80%",
    }
    const ctx = document.getElementById(`doughnut-chart-${name}`);
    if (ctx instanceof HTMLCanvasElement) {
      new Chart(ctx, {
        type: type,
        data: data,
        options: option,
      })
    }
  }, [])
  return (
    <div className="w-16 h-16 md:w-28 md:h-28 p-1 md:p-2">
      <canvas id={`doughnut-chart-${name}`}></canvas>
    </div>
  )
}