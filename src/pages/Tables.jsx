export default function Tables() {
  return (
    <>
      <h3>Meta Data</h3>
      <table>
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>Names (int)</td>
          </tr>
          <tr>
            <td>Age (Float)</td>
            <td>Age (int)</td>
          </tr>
          <tr>
            <td>Weight (Kg)</td>
            <td>Weight (Lbs)</td>
          </tr>
          <tr>
            <td>Height (M)</td>
            <td>Height (cm)</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
