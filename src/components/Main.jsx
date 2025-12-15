import Table from "./Table";
import LineChart from "./LineChart";
export default function Main() {
  const tableheader = ["Metric", "Value", "Benchmark"];
  const tabledata1 = [
    {
      metric: "Overall Return (%)",
      value: 20.5,
      count: 316,
    },
    {
      metric: "Realized Risk (%)",
      value: 26.15,
      count: 316,
    },
    {
      metric: "Sharpe Ratio",
      value: 24.5,
      count: 316,
    },
    {
      metric: "CAGR %",
      value: 4.92,
      count: 316,
    },
    {
      metric: "Turnover",
      value: 5.8,
      count: 316,
    },
    {
      metric: "Liquidation Time (days)",
      value: 26.32,
      count: 316,
    },
  ];

  const tabledata2 = [
    {
      metric: "P / E Ratio",
      value: 20.5,
      count: 316,
    },
    {
      metric: "P / B Ratio",
      value: 26.15,
      count: 316,
    },
    {
      metric: "ROE",
      value: 24.5,
      count: 316,
    },
    {
      metric: "Dividend Yield",
      value: 4.92,
      count: 316,
    },
  ];
  const chartData = [
    { date: "2024-01-01", green: 0.1377, blue: 0.1084, red: 0.0651 },
    { date: "2024-01-02", green: 0.1756, blue: 0.1279, red: 0.1062 },
    { date: "2024-01-03", green: 0.3374, blue: 0.2656, red: 0.157 },
    { date: "2024-01-04", green: 0.6377, blue: 0.3732, red: 0.109 },
    { date: "2024-01-05", green: 0.6605, blue: 0.4118, red: 0.1515 },
    { date: "2024-01-06", green: 0.6833, blue: 0.3524, red: 0.2478 },
    { date: "2024-01-07", green: 0.9937, blue: 0.2087, red: 0.4525 },
    { date: "2024-01-08", green: 1.1758, blue: 0.2001, red: 0.6017 },
    { date: "2024-01-09", green: 1.1613, blue: 0.3559, red: 0.8872 },
    { date: "2024-01-10", green: 1.3079, blue: 0.4307, red: 0.8395 },
    { date: "2024-01-11", green: 1.2943, blue: 0.3209, red: 0.9792 },
    { date: "2024-01-12", green: 1.2803, blue: 0.3906, red: 1.0403 },
    { date: "2024-01-13", green: 1.3792, blue: 0.4871, red: 1.3313 },
    { date: "2024-01-14", green: 1.134, blue: 0.4231, red: 1.2786 },
    { date: "2024-01-15", green: 0.9195, blue: 0.4904, red: 1.2223 },
    { date: "2024-01-16", green: 0.8902, blue: 0.5456, red: 1.1937 },
    { date: "2024-01-17", green: 0.7893, blue: 0.4487, red: 0.9902 },
    { date: "2024-01-18", green: 0.8992, blue: 0.5418, red: 0.97 },
    { date: "2024-01-19", green: 0.815, blue: 0.6607, red: 0.9232 },
    { date: "2024-01-20", green: 0.6508, blue: 0.846, red: 0.9805 },
    { date: "2024-01-21", green: 0.943, blue: 1.0279, red: 1.0597 },
    { date: "2024-01-22", green: 0.9672, blue: 0.9007, red: 1.3148 },
    { date: "2024-01-23", green: 1.038, blue: 0.8295, red: 1.4641 },
    { date: "2024-01-24", green: 0.8715, blue: 0.9429, red: 1.438 },
    { date: "2024-01-25", green: 0.845, blue: 1.0563, red: 1.375 },
    { date: "2024-01-26", green: 0.9227, blue: 1.17, red: 1.4717 },
    { date: "2024-01-27", green: 0.7998, blue: 1.7093, red: 1.3601 },
    { date: "2024-01-28", green: 0.9194, blue: 1.8309, red: 1.6108 },
    { date: "2024-01-29", green: 0.8841, blue: 2.025, red: 1.787 },
    { date: "2024-01-30", green: 0.8978, blue: 2.1963, red: 1.7733 },
    { date: "2024-01-31", green: 0.8622, blue: 2.3288, red: 1.6159 },

    { date: "2024-02-01", green: 1.2165, blue: 2.3369, red: 1.8123 },
    { date: "2024-02-15", green: 1.0933, blue: 2.7291, red: 2.1662 },
    { date: "2024-02-29", green: 2.126, blue: 3.4524, red: 3.7631 },

    { date: "2024-03-01", green: 2.1097, blue: 3.6145, red: 3.6908 },
    { date: "2024-03-15", green: 3.146, blue: 4.4209, red: 3.9909 },
    { date: "2024-03-31", green: 4.1029, blue: 4.6276, red: 3.9443 },

    { date: "2024-04-01", green: 4.3236, blue: 4.5481, red: 3.8635 },
    { date: "2024-04-15", green: 4.3224, blue: 5.4806, red: 4.1005 },
    { date: "2024-04-30", green: 5.9892, blue: 6.3991, red: 4.8416 },

    { date: "2024-05-01", green: 5.9005, blue: 6.447, red: 4.7546 },
    { date: "2024-05-15", green: 6.6795, blue: 7.9289, red: 5.8958 },
    { date: "2024-05-31", green: 7.4427, blue: 9.0661, red: 5.915 },

    { date: "2024-06-01", green: 7.3915, blue: 9.0978, red: 5.9689 },
    { date: "2024-06-15", green: 8.9662, blue: 8.9775, red: 5.7942 },
    { date: "2024-06-30", green: 10.6788, blue: 10.2684, red: 5.9614 },

    { date: "2024-07-01", green: 10.558, blue: 10.2652, red: 6.0481 },
  ];

  return (
    <div className="flex flex-col w-full min-h-screen mt-[12px]">
      {/* Table */}
      <div className="container-table flex-1">
        <div className="card">
          <p className="table-title">Performance Summary</p>
          <div className="flex w-full h-full mx-1">
            <Table header={tableheader} data={tabledata1} />
          </div>
        </div>
        <div className="card">
          <p className="table-title">Valuation / Ratios</p>
          <div className="flex w-full h-full mx-1">
            <Table header={tableheader} data={tabledata2} />
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="container-chart card">
        <p className="table-title">Returns (%)</p>
        <div className="flex w-full h-full mx-1 flex-1">
          <LineChart data={chartData} />
        </div>
      </div>
    </div>
  );
}
