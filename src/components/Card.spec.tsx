import { expect, test } from "@playwright/experimental-ct-react";
import { Patient } from "fhir/r4";
import Card from "./Card";

const patient = {
  resourceType: "Patient",
  id: "mom",
  meta: {
    lastUpdated: "2012-05-29T23:45:32Z",
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: mom</p><p><b>meta</b>: </p><p><b>identifier</b>: Social Security number = 444222222</p><p><b>active</b>: true</p><p><b>name</b>: Eve Everywoman (OFFICIAL)</p><p><b>telecom</b>: ph: 555-555-2003(WORK)</p><p><b>gender</b>: female</p><p><b>birthDate</b>: 31/05/1973</p><p><b>address</b>: 2222 Home Street (HOME)</p><p><b>managingOrganization</b>: <a>Organization/hl7</a></p><h3>Links</h3><table><tr><td>-</td><td><b>Other</b></td><td><b>Type</b></td></tr><tr><td>*</td><td><a>RelatedPerson/newborn-mom</a></td><td>seealso</td></tr></table></div>',
  },
  identifier: [
    {
      type: {
        coding: [
          {
            system: "http://terminology.hl7.org/CodeSystem/v2-0203",
            code: "SS",
          },
        ],
      },
      system: "http://hl7.org/fhir/sid/us-ssn",
      value: "444222222",
    },
  ],
  active: true,
  name: [
    {
      use: "official",
      family: "Everywoman",
      given: ["Eve"],
    },
  ],
  telecom: [
    {
      system: "phone",
      value: "555-555-2003",
      use: "work",
    },
  ],
  gender: "female",
  birthDate: "1973-05-31",
  address: [
    {
      use: "home",
      line: ["2222 Home Street"],
    },
  ],
  managingOrganization: {
    reference: "Organization/hl7",
  },
  link: [
    {
      other: {
        reference: "RelatedPerson/newborn-mom",
      },
      type: "seealso",
    },
  ],
} as Patient;

test("Card should display patient details", async ({ mount }) => {
  const component = await mount(<Card patient={patient} />);

  await expect(component.getByRole("heading")).toHaveText("Eve Everywoman");
  await expect(component.getByText("1973-05-31")).toBeVisible();
  await expect(component.getByText("female")).toBeVisible();
});
