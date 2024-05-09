import React from "react";
import { patients } from "../utils/examples";
import Button from "./Button";

export default function Selection({
  patient,
  setPatient,
}: {
  patient: keyof typeof patients;
  setPatient: React.Dispatch<React.SetStateAction<keyof typeof patients>>;
}) {
  const keys = Object.keys(patients) as (keyof typeof patients)[];

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      {keys.map((k) => (
        <Button
          key={k}
          handleClick={() => setPatient(k)}
          caption={k}
          selected={patient === k}
        />
      ))}
    </div>
  );
}
