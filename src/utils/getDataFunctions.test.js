const {getPrevEpisode} = require("./getDataFunctions");

describe("getprevEpisode", () => {
    test("if episode number 1 in season should return null", () => {
        console.log()
        expect(getPrevEpisode(4952)).toBe(null);
    });
});