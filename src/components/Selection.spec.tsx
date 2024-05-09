import { expect, test } from "@playwright/experimental-ct-react";
import Selection from "./Selection";

test("Selection should display buttons", async ({ mount }) => {
  const component = await mount(
    <Selection patient="patient1" setPatient={() => {}} />
  );

  await Promise.all([
    expect(component.getByRole("button", { name: "patient1" })).toBeVisible(),
    expect(component.getByRole("button", { name: "patient2" })).toBeVisible(),
    expect(component.getByRole("button", { name: "patient3" })).toBeVisible(),
  ]);
});
