import { HumanName } from "fhir/r4";

export function formatName(name: HumanName[] | undefined) {
  if (!name) {
    return "";
  }

  const formattedName = name
    .map((i) => {
      const { given = [], family, suffix } = i;

      const givenNames = given?.join(", ");
      const suffices = suffix?.join(", ");

      return [givenNames, family, suffices].join(" ");
    })
    .join(" - ");

  return formattedName.trim();
}
