import logger from '@docusaurus/logger'

test("Função teste 01, Gets if the logger return a valid value", () => {
    const result = logger.red("Teste Logger");
    expect(typeof result).toBe('string');
})