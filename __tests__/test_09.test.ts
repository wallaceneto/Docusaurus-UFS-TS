import logger from "@docusaurus/logger";

test("Funcao Teste 09, Tests if logger can throw an error message on fail", () => {
    expect(
        () =>
          logger.interpolate`(keepAnsi) I mistyped this: cde=${'this code'} and I will be damned`,
      ).toThrowErrorMatchingInlineSnapshot(
        `"Bad Docusaurus logging message. This is likely an internal bug, please report it."`,
      );
}) 