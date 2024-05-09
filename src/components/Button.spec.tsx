import { expect, test } from "@playwright/experimental-ct-react";
import Button from "./Button";

test("Button should contain caption and handle click event and have white background", async ({
  mount,
}) => {
  let clicked = false;

  const component = await mount(
    <Button
      caption="FooBar"
      handleClick={() => {
        clicked = true;
      }}
      selected
    />
  );

  await expect(component).toContainText("FooBar");
  await expect(component).toHaveClass("button-selected");
  await component.click();

  expect(clicked).toBeTruthy();
});

test("Button should contain caption and have purple background", async ({
  mount,
}) => {
  const component = await mount(
    <Button caption="FooBar" handleClick={() => {}} selected={false} />
  );

  await expect(component).toContainText("FooBar");
  await expect(component).toHaveClass("button-not-selected");
});
