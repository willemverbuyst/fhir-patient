import { expect, test } from "@playwright/experimental-ct-react";
import App from "./App";

test.use({ viewport: { width: 500, height: 500 } });

test("App should contain title", async ({ mount }) => {
  const component = await mount(<App />);
  await expect(component).toContainText("Patients");
});
