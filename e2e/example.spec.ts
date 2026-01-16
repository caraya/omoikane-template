import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Omoikane App/);
});

test('counter increments', async ({ page }) => {
  await page.goto('/');

  // Click the get started link.
  await page.getByRole('button', { name: /count is 0/ }).click();

  await expect(page.getByRole('button', { name: /count is 1/ })).toBeVisible();
});
