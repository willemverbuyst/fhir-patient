import { Patient } from "fhir/r4";
import { formatName } from "../utils/name";

export default function Card({ patient }: { patient: Patient }) {
  return (
    <div>
      <h3>{formatName(patient.name)}</h3>
      <p>{patient.birthDate}</p>
      <p>{patient.gender}</p>
    </div>
  );
}
