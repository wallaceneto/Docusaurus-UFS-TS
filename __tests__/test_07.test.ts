import logger from "@docusaurus/logger";

test("Teste Funcao 07, Tests if logger can interpolate and verify valid flags", () => {
    expect(
        logger.interpolate`(keepAnsi) The following commands are available:code=${[
          'docusaurus start',
          'docusaurus build',
          'docusaurus deploy',
        ]}`,
      ).toMatchInlineSnapshot(`
        "(keepAnsi) The following commands are available:
        - <cyan>\`docusaurus start\`</color>
        - <cyan>\`docusaurus build\`</color>
        - <cyan>\`docusaurus deploy\`</color>"
      `);
})