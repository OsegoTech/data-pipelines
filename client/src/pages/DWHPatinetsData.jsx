import useFetch from "../hook/useFetch";
export default function DWHPatients() {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:3000/dwh-data/patients"
  );
  console.log(data);
  const table = data.map((records) => {
    return (
      <tr key={records.PatientID}>
        <td>{records.PatientID}</td>
        <td>{records.PatientPK}</td>
        <td>{records.MFLCode}</td>
        <td>{records.FacilityName}</td>
        <td>{records.FirstName}</td>
        <td>{records.LastName}</td>
        <td>{records.DOB}</td>
        <td>{records.Age}</td>
        <td>{records.Gender}</td>
        <td>{records.MaritalStatus}</td>
        <td>{records.County}</td>
        <td>{records.Constituency}</td>
        <td>{records.Village}</td>
      </tr>
    );
  });
  return (
    <div>
      {loading ? (
        "Please wait while we load Patients Data"
      ) : (
        <>
          <h3>DWH Patients Data</h3>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>PAtient PK</th>
                <th>MFL Code</th>
                <th>Facility</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Marital Status</th>
                <th>County</th>
                <th>Constituency</th>
                <th>Village</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </>
      )}
    </div>
  );
}
