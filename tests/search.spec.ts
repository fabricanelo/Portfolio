import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/?zx=1776889960184');
  await page.getByRole('combobox', { name: 'Buscar' }).click();
  await page.getByRole('combobox', { name: 'Buscar' }).fill('como testear usando playwright');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dcomo%2Btestear%2Busando%2Bplaywright%26sca_esv%3D05c88a8d61870a5e%26source%3Dhp%26ei%3DZjDpabnqK_n11sQP0-Xm8A4%26iflsig%3DAFdpzrgAAAAAaek-ds8b2OvmOXPLW3XD0lBTAmerPmze%26ved%3D0ahUKEwi5ta32poKUAxX5upUCHdOyGe4Q4dUDCCo%26uact%3D5%26oq%3Dcomo%2Btestear%2Busando%2Bplaywright%26gs_lp%3DEgdnd3Mtd2l6Ih5jb21vIHRlc3RlYXIgdXNhbmRvIHBsYXl3cmlnaHQyBRAhGKABMgUQIRigATIFECEYoAFIsTdQxApY9TRwBHgAkAEAmAGEAaABtReqAQQyNS44uAEDyAEA-AEBmAIloAKLGagCCsICChAAGAMY6gIYjwHCAgoQLhgDGOoCGI8BwgILEAAYgAQYsQMYgwHCAggQABiABBixA8ICBRAAGIAEwgIFEC4YgATCAg4QABiABBixAxiDARjJA8ICCxAAGIAEGLEDGMkDwgILEAAYgAQYkgMYigXCAggQABgWGAoYHsICBhAAGBYYHsICBRAAGO8FwgIIEAAYgAQYogTCAgUQIRifBcICBBAhGBWYAw3xBSelviOuz3h0kgcFMjMuMTSgB92qAbIHBTE5LjE0uAfqGMIHCTMuMTIuMjEuMcgHf4AIAA%26sclient%3Dgws-wiz%26sei%3DczDpaZ7WMI6C5OUP2JrhqAs&q=EgTJ63ckGPTgpM8GIjDG3VadEnw71vwhQfLkaOzjuqloDn2S6tpVSE1YGFpDBxTs3NVDdK7rCkySDcgnvkMyAVJaAUM');
  await page.getByRole('link', { name: 'Ejecución y depuración de' }).click();
});