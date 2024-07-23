import { test, expect } from "@playwright/test";

test("navigates to home", async ({ page }) => {
  // Navigate to Homepage
  await page.goto("/");

  // Expect a title "to contain" a substring.
  await expect(page.getByText(/Welcome Guest/)).toBeTruthy();
});
