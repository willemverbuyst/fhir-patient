import { Patient } from "fhir/r4";
import React from "react";
import { patients } from "../utils/examples";
import Button from "./Button";

export const MemoSelection = React.memo(function Selection({
  setPatient,
}: {
  setPatient: React.Dispatch<React.SetStateAction<Patient>>;
}) {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      {Object.entries(patients).map(([k, v]) => (
        <Button key={k} handleClick={() => setPatient(v)} caption={k} />
      ))}
    </div>
  );
});
