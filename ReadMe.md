![playwright logo](playwright-logo.png)

# About

This project demonstrates how you can use [Microsoft Playwright](https://playwright.dev/) to take screenshots of your online platform or product.

See `screenshots` folder for examples.

**You are most welcome to use this code in your commercial projects, all that I ask in return is that you credit my work by providing a link back to this repository.**

Thank you & Enjoy!

## Features & Benefits:

- screenshots can be generated and re-genreated each time you release a new version of the product 
- full-screen and close-ups
- Playwright has a built-in UI which is easy to use

## Ways to Extend
- Playwright provides an authentication system so you can log in to your product, record tests, then logout. [See Docs](https://playwright.dev/docs/auth)
- reuse path names using [dotenv](https://www.npmjs.com/package/dotenv)

# How to Run

## Pre-requisites:

### install:

- nodejs (v18+)
- npm
- python3 (v3.11+)
- VScode (optional, but recommended)

### Setup:

- run `npm install`, then follow the prompts
- install VScode Playwright extension: https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

## Generate screenshots:

### Option 1 - The playwright UI 

Run the following:
```bash
npx playwright test --ui
```

### Option 2 - The terminal 


```bash
npx playwright take_screenshots.spec.ts
```

### View results

Screenshots are stored in the `screenshots` folder 

# Reference

## Generate a test

In VScode... 

1. click the testing icon
2. under playwright, click `record new`
3. Perform actions required to navigate to the page you wish to screenshot
4. Click on the element you wish to screenshot
5. Copy the resulting code to `take_screenshots.spec.ts`, then clean it to match the the format below:

```ts
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
```

## Delete screenshots folder

Either delete it manually, or run `node delete_screenshots_folder.js`



