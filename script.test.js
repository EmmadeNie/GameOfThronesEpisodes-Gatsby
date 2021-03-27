const { power } = require("./script.js");

test("power", () => {
    const result = power(2,3);
    expect(result).toEqual(8);
});