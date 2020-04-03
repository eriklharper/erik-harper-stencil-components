import { newE2EPage } from '@stencil/core/testing';

describe('erik-radio-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-radio-button></erik-radio-button>');

    const element = await page.find('erik-radio-button');
    expect(element).toHaveClass('hydrated');
  });
});
