import "./App.css";
import ETLPatients from "./pages/ETlPatients";
import ETLPatientsVisits from "./pages/ETlPatientsVisits";
import SourceData from "./pages/HospitalData";
import VisitsSourceData from "./pages/HospitalVisitsData";

import Tables from "./pages/Tables";

function App() {
  return (
    <div className="container">
      <h1>Data Lineage</h1>
      {/* <div className="row"> */}
        <div>
          <Tables />
          <SourceData />
          <VisitsSourceData />
          <ETLPatients />
          <ETLPatientsVisits />
        </div>
      {/* </div> */}
    </div>
  );
}

export default App;
