import { newE2EPage } from '@stencil/core/testing';

describe('erik-animated-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-animated-progress-bar progress="50"></erik-animated-progress-bar>');

    const element = await page.find('erik-animated-progress-bar');
    expect(element).toHaveClass('hydrated');

    // To start comparing the visual result, you first must run page.compareScreenshot; 
    // This will capture a screenshot, and save the file to "/screenshot/images".
    // You'll be able to check that into your repo to provide those results to your team.
    // You can only have one of these commands per test. 
    const results = await page.compareScreenshot();

    // Test against the percentage of changes. if 'allowableMismatchedRatio' is above 20% changed, 
    expect(results).toMatchScreenshot({ allowableMismatchedRatio: 0.2 })

  });
});
