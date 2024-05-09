import { Patient } from "fhir/r4";
import { formatName } from "../utils/name";

export default function Card({ patient }: { patient: Patient }) {
  return (
    <div
      style={{
        border: "2px solid white",
        marginTop: "1rem",
        borderRadius: "8px",
        padding: "0.5rem",
        minWidth: "500px",
      }}
    >
      <h3>{formatName(patient.name)}</h3>
      <p>{patient.birthDate}</p>
      <p>{patient.gender}</p>
    </div>
  );
}
