import { normalizeThemeConfig } from '@docusaurus/utils-validation/src/validationUtils'
import { Joi } from '@docusaurus/utils-validation';

// Tests Validation schema functions
test("Função Teste 03, Tests if the function permits a unkown prop in obj", () => {
        const themeConfig = {something: 'a', someNumber: 1};
        expect(
          normalizeThemeConfig(
            Joi.object({something: Joi.string()}).unknown(false),
            themeConfig,
          ),
        ).toEqual(themeConfig);
})