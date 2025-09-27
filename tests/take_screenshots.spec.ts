import { test, expect } from '@playwright/test';

test('home page book image', async ({ page }) => {
  let saveName = 'home_page_book_image'

  // navitage to element
  await page.goto('https://www.wikihow.com/Main-Page');
  await page.waitForTimeout(500);

  // full page screenshot
  await page.screenshot({ path: `./screenshots/${saveName}.png`, fullPage: true });

  // element screenshot
  await page.locator('#hp_books').screenshot({ path: `./screenshots/${saveName}_element.png` });

});

test('Computers and Electronics category', async ({ page }) => {
  let saveName = 'computers_and_electronics_category'

  // navitage to element
  await page.goto('https://www.wikihow.com/Main-Page');
  await page.getByRole('link', { name: 'Computers and Electronics' }).first().click();
  await page.waitForTimeout(500);

  // full page screenshot
  await page.screenshot({ path: `./screenshots/${saveName}.png`, fullPage: true });

  // element screenshot
  await page.locator('#topics_grid').getByRole('link', { name: 'Audio' }).screenshot({ path: `./screenshots/${saveName}_Audio_element.png` });
  await page.locator('#topics_grid').getByRole('link', { name: 'Computers' }).screenshot({ path: `./screenshots/${saveName}_Computers_element.png` });
  await page.locator('#topics_grid').getByRole('link', { name: 'Internet' }).screenshot({ path: `./screenshots/${saveName}_Internet_element.png` });
  await page.locator('#topics_grid').getByRole('link', { name: 'Telephones' }).screenshot({ path: `./screenshots/${saveName}_Telephones_element.png` });

});