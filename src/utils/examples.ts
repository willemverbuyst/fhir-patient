import { Patient } from "fhir/r4";
import patient1 from "../../examples/patient_1.json";
import patient2 from "../../examples/patient_2.json";
import patient3 from "../../examples/patient_3.json";

export const patients = { patient1, patient2, patient3 } as {
  [key: string]: Patient;
};
