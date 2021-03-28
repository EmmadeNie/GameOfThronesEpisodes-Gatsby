const {getPrevEpisode, getNextEpisode} = require("./getDataFunctions");

describe("getprevEpisode in same season", () => {
    test("if episode number 1 in season should return null", () => {
        expect(getPrevEpisode(4952)).toBe(null);
        expect(getPrevEpisode(4972)).toBe(null);
    });
    // test("should return episodeId that comes before", () => {
    //     expect(getPrevEpisode(4975)).toBe(4974);
    //     expect(getPrevEpisode(1221414)).toBe(1221413);
    // });
});

// describe("getNextEpisode in same season", () => {
//     test("if last episode in season should return null", () => {
//         expect(getNextEpisode(4952)).toBe(null);
//         expect(getNextEpisode(4972)).toBe(null);
//     });
//     test("should return episodeId that comes after", () => {
//         expect(getNextEpisode(4975)).toBe(4974);
//         expect(getNextEpisode(1221414)).toBe(1221413);
//     });
// });