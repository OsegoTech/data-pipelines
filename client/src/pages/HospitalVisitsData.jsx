import useFetch from "../hook/useFetch";
export default function VisitsSourceData() {
  const { data, loading, error } = useFetch(
    "http://127.0.0.1:3000/source-data/visits"
  );
  console.log(data);
  const table = data.map((records) => {
    return (
      <tr key={records.PatientID}>
        <td>{records.PatientID}</td>
        <td>{records.PatientPK}</td>
        <td>{records.MFLCode}</td>
        <td>{records.FacilityName}</td>
        <td>{records.VisitDate}</td>
        <td>{records.NextAppointmentDate}</td>
        <td>{records.VisitCentre}</td>
        
      </tr>
    );
  });
  return (
    <div>
      {loading ? (
        "Please wait while we load Patients Data"
      ) : (
        <>
          <h3>Hospital Patients Visit Dates</h3>
          <table>
            <thead>
              <tr>
                <th>PatientID</th>
                <th>PatinetPK</th>
                <th>MFL Code</th>
                <th>Facility Name</th>
                <th>Visit Date</th>
                <th>Next Appointment Date</th>
                <th>Center</th>
                
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </>
      )}
    </div>
  );
}
