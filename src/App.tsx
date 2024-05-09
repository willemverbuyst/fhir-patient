import { Patient } from "fhir/r4";
import patientJson from "../patient.json";
import "./App.css";

function App() {
  const patient = patientJson as Patient;

  return (
    <section>
      <h1>
        {patient.name
          ?.map((i) => i.given?.join(", ") + " " + i.family)
          .join(", ")}
      </h1>
      <p>{patient.birthDate}</p>
    </section>
  );
}

export default App;
