import { expect, test } from "@playwright/experimental-ct-react";
import { HumanName } from "fhir/r4";
import { formatName } from "./name";

test.describe("formatName", () => {
  test("should return an empty string if name is undefined", () => {
    expect(formatName(undefined)).toBe("");
  });

  test("should format a single name correctly", () => {
    const name: HumanName[] = [
      {
        given: ["John"],
        family: "Doe",
        suffix: ["Jr."],
      },
    ];
    expect(formatName(name)).toBe("John Doe Jr.");
  });

  test("should format multiple names correctly", () => {
    const names: HumanName[] = [
      {
        given: ["John"],
        family: "Doe",
        suffix: ["Jr."],
      },
      {
        given: ["Jane"],
        family: "Smith",
        suffix: ["Sr."],
      },
    ];
    expect(formatName(names)).toBe("John Doe Jr. - Jane Smith Sr.");
  });

  test("should handle missing given names", () => {
    const name: HumanName[] = [
      {
        family: "Doe",
        suffix: ["Jr."],
      },
    ];
    expect(formatName(name)).toBe("Doe Jr.");
  });

  test("should handle missing family name", () => {
    const name: HumanName[] = [
      {
        given: ["John"],
        suffix: ["Jr."],
      },
    ];
    expect(formatName(name)).toBe("John  Jr.");
  });

  test("should handle missing suffix", () => {
    const name: HumanName[] = [
      {
        given: ["John"],
        family: "Doe",
      },
    ];
    expect(formatName(name)).toBe("John Doe");
  });

  test("should handle missing given names and suffix", () => {
    const name: HumanName[] = [
      {
        family: "Doe",
      },
    ];
    expect(formatName(name)).toBe("Doe");
  });

  test("should handle missing family name and suffix", () => {
    const name: HumanName[] = [
      {
        given: ["John"],
      },
    ];
    expect(formatName(name)).toBe("John");
  });

  test("should handle all fields missing", () => {
    const name: HumanName[] = [{}];
    expect(formatName(name)).toBe("");
  });
});
