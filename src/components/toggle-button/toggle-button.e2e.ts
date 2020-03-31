import { newE2EPage } from '@stencil/core/testing';

describe('erik-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-toggle-button></erik-toggle-button>');

    const element = await page.find('erik-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});
