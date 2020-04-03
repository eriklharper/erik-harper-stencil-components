import { newE2EPage } from '@stencil/core/testing';

describe('erik-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-radio-group></erik-radio-group>');

    const element = await page.find('erik-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
