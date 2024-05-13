import { test, expect } from '@playwright/test';

test.describe('Successful registration', () => {

  test.beforeEach( async ({page})=> {
    await page.goto('/');
  })
  test('registration with correct credentials', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
    await page.locator('#signupName').fill('Petro');
    await page.locator('#signupLastName').fill('Petrov');
    await page.getByLabel('Name').fill('petyapetrov+aqa01@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
    await page.getByLabel('Re-enter password').fill('Raduga_123456');
    await page.getByRole('button', { name: 'Register' }).click();
    await expect(page.getByRole('heading', { name: 'Garage' })).toBeVisible();
    await page.getByRole('button', { name: 'User photo My profile' }).click();
    await page.getByRole('link', { name: 'Settings', exact: true }).click();
    await page.getByRole('button', { name: 'Remove my account' }).click();
    await page.getByRole('button', { name: 'Remove' }).click();
    await expect(page.getByRole('banner').getByRole('link').first()).toBeVisible();
});
})

test.describe('Unsuccessful registration with empty input', () => {

  test.beforeEach( async ({page})=> {
    await page.goto('/');
  })
  test('registration with empty name disabled button register', async ({ page }) => {
    await page.goto('https://qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.locator('#signupLastName').fill('Petrov');
    await page.getByLabel('Name').fill('petyapetrov+aqa02@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
    await page.getByLabel('Re-enter password').fill('Raduga_123456');
    await expect(page.getByRole('button' , { name: 'Register' })).toBeDisabled();
});

test('registration with empty name required error', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa03@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await page.locator('#signupName').click();
  await page.locator('div').filter({ hasText: /^Register$/ }).click();
  await expect(page.getByText('Name required')).toBeVisible();
});

test('registration with empty last name disabled button register', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.getByLabel('Name').fill('petyapetrov+aqa04@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await expect(page.getByRole('button' , { name: 'Register' })).toBeDisabled();
});

test('registration with empty last name required error', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.getByLabel('Name').fill('petyapetrov+aqa05@gmail.com@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await page.locator('#signupLastName').click();
  await page.locator('div').filter({ hasText: /^Register$/ }).click();
  await expect(page.getByText('Last name required')).toBeVisible();
});

test('registration with empty email disabled button register', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await expect(page.getByRole('button' , { name: 'Register' })).toBeDisabled();
});

test('registration with empty email requred error', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await page.getByLabel('Name').click();
  await page.locator('div').filter({ hasText: /^Register$/ }).click();
  await expect(page.getByText('Email required')).toBeVisible();
});

test('registration with empty password disabled button register', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa06@gmail.com');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await expect(page.getByRole('button' , { name: 'Register' })).toBeDisabled();
});

test('registration with empty password required error', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa07@gmail.com');
  await page.getByLabel('Password', { exact: true }).click();
  await page.getByLabel('Re-enter password').click();
  await expect(page.getByText('Password required', { exact: true })).toBeVisible();
});

test('registration with empty re-enter password disabled button register', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa08@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await expect(page.getByRole('button' , { name: 'Register' })).toBeDisabled();
});

test('registration with empty re-enter password required error', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa09@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').click();
  await page.locator('div').filter({ hasText: /^Register$/ }).click();
  await expect(page.getByText('Re-enter password required')).toBeVisible();
});
})

test.describe('Unsuccessful registration with invalid credentials', () => {

  test.beforeEach( async ({page})=> {
    await page.goto('/');
  })
  test('registration with invalid name', async ({ page }) => {
    await page.goto('https://qauto.forstudy.space/');
    await page.getByRole('button', { name: 'Sign up' }).click();
    await page.locator('#signupName').fill('2123');
    await page.locator('#signupLastName').fill('Ivanov');
    await page.getByLabel('Name').fill('petyapetrov+aqa10@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
    await page.getByLabel('Re-enter password').fill('Raduga_123456');
    await expect(page.locator('.invalid-feedback')).toHaveCSS('border-color', "rgb(220, 53, 69)");
});

test('registration with invalid last name', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Іванов');
  await page.getByLabel('Name').fill('petyapetrov+aqa11@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await expect(page.locator('.is-invalid')).toHaveCSS('border-color' , "rgb(220, 53, 69)");
});

test('registration with invalid email', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petrov25694gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await expect(page.locator('.is-invalid')).toHaveCSS('border-color' , "rgb(220, 53, 69)");
});

test('registration with empty password', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa12@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('123456');
  await page.getByLabel('Re-enter password').fill('Raduga_123456');
  await expect(page.getByText('Password has to be from 8 to')).toBeVisible();
});

test('registration with invalid re-enter password', async ({ page }) => {
  await page.goto('https://qauto.forstudy.space/');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await page.locator('#signupName').fill('Ivan');
  await page.locator('#signupLastName').fill('Petrov');
  await page.getByLabel('Name').fill('petyapetrov+aqa13@gmail.com');
  await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
  await page.getByLabel('Re-enter password').fill('Raduga_12345');
  await page.locator('div').filter({ hasText: /^Register$/ }).click();
  await expect(page.getByText('Passwords do not match')).toBeVisible();
});

test.describe('Unsuccessful registration with registration with character length error', () => {

  test.beforeEach( async ({page})=> {
    await page.goto('/');
  })

  test('registration with character length error name', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
    await page.locator('#signupName').fill('P');
    await page.locator('#signupLastName').fill('Petrov');
    await page.getByLabel('Name').fill('petyapetrov+aqa14@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
    await page.getByLabel('Re-enter password').fill('Raduga_123456');
    await page.locator('div').filter({ hasText: /^Register$/ }).click();
    await expect(page.getByText('Name has to be from 2 to 20')).toBeVisible();
  });

  test('registration with character length error last name', async ({ page }) => {
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect(page.getByRole('heading', { name: 'Registration' })).toBeVisible();
    await page.locator('#signupName').fill('Petro');
    await page.locator('#signupLastName').fill('P');
    await page.getByLabel('Name').fill('petyapetrov+aqa15@gmail.com');
    await page.getByLabel('Password', { exact: true }).fill('Raduga_123456');
    await page.getByLabel('Re-enter password').fill('Raduga_123456');
    await page.locator('div').filter({ hasText: /^Register$/ }).click();
    await page.getByText('Last name has to be from 2 to').click();
  });

})
})
