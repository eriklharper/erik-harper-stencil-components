import { newE2EPage } from '@stencil/core/testing';

describe('erik-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-form></erik-form>');

    const element = await page.find('erik-form');
    expect(element).toHaveClass('hydrated');
  });
});
