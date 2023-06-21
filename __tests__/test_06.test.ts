import logger from "@docusaurus/logger";

test("Funcao Teste 06, Tests if the logger recognizes valid flags", () => {
    expect(
        logger.interpolate`(keepAnsi) The package at path=${'packages/docusaurus'} has number=${10} files. name=${'Babel'} is exported here subdue=${'(as a preset)'} that you can with code=${"require.resolve('@docusaurus/core/lib/babel/preset')"}`,
      ).toMatchInlineSnapshot(
        `"(keepAnsi) The package at <cyan><underline>"packages/docusaurus"</underline></color> has <yellow>10</color> files. <blue><bold>Babel</intensity></color> is exported here <gray>(as a preset)</color> that you can with <cyan>\`require.resolve('@docusaurus/core/lib/babel/preset')\`</color>"`,
      );
})