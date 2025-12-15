export default function tb({ header, data }) {
  return (
    <table className="tb">
      <thead className="tb-header">
        <tr className="tb-row">
          {header &&
            header.map((item, index) => (
              <th className="tb-cell" key={index}>
                {item}
              </th>
            ))}
        </tr>
      </thead>
      <tbody className="tb-body">
        {data &&
          data.map((row, index) => (
            <tr className="tb-row" key={index}>
              <td className="tb-cell">{row.metric}</td>
              <td className="tb-cell">{row.value}</td>
              <td className="tb-cell">${row.count}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}
