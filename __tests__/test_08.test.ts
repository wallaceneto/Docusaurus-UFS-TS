import createSitemap from "@docusaurus/plugin-sitemap/src/createSitemap";

test("Funcao Teste 08, Tests if function throws an error creating new empty sitemap", () => {
    expect(async () => {
        // @ts-expect-error: test
        await createSitemap({}, [], {}, {} as PluginOptions);
      }).rejects.toThrow(
        'URL in docusaurus.config.js cannot be empty/undefined.',
      )
})