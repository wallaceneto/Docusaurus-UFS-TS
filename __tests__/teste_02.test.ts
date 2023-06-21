import { getFormat } from "@docusaurus/mdx-loader/src/format"

test("Função Teste 02, Gets if the format file is a .md file", () => {
    const result = getFormat({frontMatterFormat: 'md', filePath: 'xyz.md'});
    expect(result).toBe('md'); 
})