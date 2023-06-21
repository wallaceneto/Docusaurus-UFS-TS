import logger from "@docusaurus/logger";

test("Funcao Teste 05, Tests if logger interpolates values inside array", () => {
    const first = 'first'
    const arr = [1, 'test']

    expect(logger.interpolate`(keepAnsi) This is a test: ${first}, this is the array: ${arr}`).toMatchInlineSnapshot(`
        "(keepAnsi) This is a test: first, this is the array: 
        - 1
        - test"
    `)
})