import { test, expect, } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('index.html')
});

test('my test', async ({ page }) => {
    const messages = [];
    page.on('console', msg => messages.push(`${msg.text()}`));
    
    await page.getByRole('button', {name: 'Click me' }).click();
    
    await expect(page.getByText('Amazing stuff')).toBeVisible();
});