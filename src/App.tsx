import { Patient } from "fhir/r4";
import { useState } from "react";
import patient_1 from "../examples/patient_1.json";
import patient_2 from "../examples/patient_2.json";
import patient_3 from "../examples/patient_3.json";
import "./App.css";
import { formatName } from "./utils/name";

function App() {
  const patient1 = patient_1 as Patient;
  const patient2 = patient_2 as Patient;
  const patient3 = patient_3 as Patient;

  const [patient, setPatient] = useState<Patient>(patient1);

  return (
    <section>
      <div>
        <button onClick={() => setPatient(patient1)}>Patient 1</button>
        <button onClick={() => setPatient(patient2)}>Patient 2</button>
        <button onClick={() => setPatient(patient3)}>Patient 3</button>
      </div>
      <h3>{formatName(patient.name)}</h3>
      <p>{patient.birthDate}</p>
      <p>{patient.gender}</p>
    </section>
  );
}

export default App;
