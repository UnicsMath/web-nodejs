import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('heading', { name: 'Learn Computer Science level math with ease.' })
	).toBeVisible();
});

test('index page has expected p', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByText('Less text, more exercises.') &&
			page.getByText('One step closer to change the world.')
	).toBeVisible();
	//await expect(page.getByText('One step closer to change the world.')).toBeVisible();
});

/*test('test', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('link', { name: 'Home' }).click();
	await page.getByRole('link', { name: 'Courses' }).click();
	await page.getByRole('link', { name: 'Progress' }).click();
	await page.getByRole('link', { name: 'Admin' }).click();
	await page.getByRole('link', { name: 'Courses' }).click();
	await page.getByRole('link', { name: 'Pre algebra' }).click();
	await page.getByRole('heading', { name: 'Pre algebra' }).click();
});*/
