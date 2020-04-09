import { newE2EPage } from '@stencil/core/testing';

describe('erik-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-radio-group></erik-radio-group>');

    const element = await page.find('erik-radio-group');
    expect(element).toHaveClass('hydrated');
  });
  it('defaults to small', async () => {
    const page = await newE2EPage();
    await page.setContent('<erik-radio-group></erik-radio-group>');

    const element = await page.find('erik-radio-group');
    expect(element.getAttribute("scale")).toBe("small");
  });
  it('radio-buttons receive necessary props', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <erik-radio-group name="radio">
        <erik-radio-button value="one" checked>
              One
        </erik-radio-button>
        <erik-radio-button value="two">
            Two
        </erik-radio-button>
      </erik-radio-group>
    `);

    const radio = await page.find('erik-radio-button');
    const name = await radio.getProperty("name");
    const scale = await radio.getProperty("scale");
    expect(name).toBe("radio");
    expect(scale).toBe("small");
  });
  it('clicking a radio updates its checked status', async () => {
    const page = await newE2EPage();
    await page.setContent(`
      <erik-radio-group name="radio">
        <erik-radio-button id="first" value="one" checked>
              One
        </erik-radio-button>
        <erik-radio-button id="second" value="two">
            Two
        </erik-radio-button>
      </erik-radio-group>
    `);

    const first = await page.find('erik-radio-button#first');
    const second = await page.find('erik-radio-button#second');

    await second.click();
    await page.waitForChanges();
    
    expect(await first.getProperty("checked")).toBe(false);
    expect(await second.getProperty("checked")).toBe(true);
    
    await first.click();
    await page.waitForChanges();
    
    expect(await first.getProperty("checked")).toBe(true);
    expect(await second.getProperty("checked")).toBe(false);
  });
});
