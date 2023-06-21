import {shouldQuotifyFrontMatter} from '@docusaurus/migrate/src/frontMatter'

test("Função Teste 04, Test if function permits a title with special char", () => {
    const result = shouldQuotifyFrontMatter(['title', "Some title sàáâãäåçèéêëìíîïðòóôõöùú" ])
    expect(result).toBe(false)
})