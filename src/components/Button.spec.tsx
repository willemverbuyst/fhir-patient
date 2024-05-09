import { expect, test } from "@playwright/experimental-ct-react";
import Button from "./Button";

test("Button should contain caption and handle click event", async ({
  mount,
}) => {
  let clicked = false;

  const component = await mount(
    <Button
      caption="FooBar"
      handleClick={() => {
        clicked = true;
      }}
    />
  );
  await expect(component).toContainText("FooBar");
  await component.click();

  expect(clicked).toBeTruthy();
});
