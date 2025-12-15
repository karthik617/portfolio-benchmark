import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend
  );
  
  export default function SmartLineChart({ data }) {
    const chartData = {
      labels: data.map(d => d.date),
      datasets: [
        {
          label: "Green",
          data: data.map(d => d.green),
          borderColor: "#22c55e",
          backgroundColor: "#22c55e",
          tension: 0.35,
          pointRadius: 0,
        },
        {
          label: "Blue",
          data: data.map(d => d.blue),
          borderColor: "#3b82f6",
          backgroundColor: "#3b82f6",
          tension: 0.35,
          pointRadius: 0,
        },
        {
          label: "Red",
          data: data.map(d => d.red),
          borderColor: "#ef4444",
          backgroundColor: "#ef4444",
          tension: 0.35,
          pointRadius: 0,
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
          align: "center",
          labels: {
            color: "#fff",
            usePointStyle: true,
            pointStyle: "rect",
            boxWidth: 12,
          },
        },
      },
      scales: {
        x: {
          grid: { color: "#5e5e5e" },
          ticks: {
            color: "#fff",
            maxRotation: 0,
            autoSkip: false,
            maxTicksLimit: 12,
            callback: (_, index) => {
              const date = data[index]?.date;
              if (!date) return "";
  
              const [year, month, day] = date.split("-");
  
              if (day === "01") {
                const map = {
                  "01": "Jan",
                  "02": "Feb",
                  "03": "Mar",
                  "04": "Apr",
                  "05": "May",
                  "06": "June",
                  "07": "July",
                };
                return `${map[month]} ${year}`;
              }
              return "";
            },
          },
        },
        y: {
          min: 0,
          grid: { color: "#5e5e5e" },
        },
      },
    };
  
    return (
      <div style={{ height: 250, background: "#131315", padding: 16, width: "97%", display: "flex", margin: "auto" }}>
        <Line data={chartData} options={options} />
      </div>
    );
  }
  