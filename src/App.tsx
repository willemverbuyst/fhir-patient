import { Patient } from "fhir/r4";
import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Selection from "./components/Selection";
import { patients } from "./utils/examples";

function App() {
  const [patient, setPatient] = useState<Patient>(patients.patient1);

  return (
    <section>
      <Selection setPatient={setPatient} />
      <Card patient={patient} />
    </section>
  );
}

export default App;
