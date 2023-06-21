import logger from "@docusaurus/logger";

test("Funcao Teste 10, Test if logger prints diferents types of test", () => {
    const consoleMock = jest.spyOn(console, 'log').mockImplementation(() => {});

    logger.success({a: 1});
    logger.success(undefined);
    logger.success([1, 2, 3]);
    logger.success(new Date(2021, 10, 13));
    expect(consoleMock.mock.calls).toMatchSnapshot();
})