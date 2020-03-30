import { newE2EPage } from '@stencil/core/testing';

describe('erik-animated-progress-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-animated-progress-bar></erik-animated-progress-bar>');

    const element = await page.find('erik-animated-progress-bar');
    expect(element).toHaveClass('hydrated');
  });
});
