import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Selection from "./components/Selection";
import { patients } from "./utils/examples";

function App() {
  const [patient, setPatient] = useState<keyof typeof patients>("patient1");

  return (
    <section>
      <h1>Patients</h1>
      <Selection setPatient={setPatient} patient={patient} />
      <Card patient={patients[patient]} />
    </section>
  );
}

export default App;
