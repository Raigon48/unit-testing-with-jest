import { getStringInfo, toUpperCase } from "../../src/utils"

describe("Utils test suite", () => {

    describe.only("toUpperCase", () => {

        it("Should return uppercase string for valid string", () => {
            //Arrange
            const sut = toUpperCase;
            const expected = "ABCD";

            //Act
            const actual = sut("abcd");

            //Assert
            expect(actual).toBe(expected);
        });
    });

    describe("getStringInfo", () => {

        it("should get the stringInfo", () => {
            const sut = getStringInfo;

            const actual = sut("AbCd");

            expect(actual.lowercase).toBe("abcd");
            expect(actual.uppercase).toBe("ABCD");

            expect(actual.characters).toHaveLength(4);
            expect(actual.characters).toContain<String>("b");
            expect(actual.characters).not.toContain<String>("B");
        });
    });

    describe("test getStringInfo", () => {

        it.each([
            {
                input: "aBcd",
                expected: "abcd"
            },
            {
                input: "abCd",
                expected: "abcd"
            },
            {
                input: "ABCD",
                expected: "abcd"
            }
        ])("$input should lowercase to $expected", ({ input, expected }) => {
            const sut = getStringInfo;

            const actual = sut(input);

            expect(actual.lowercase).toBe(expected);
        });

        it.each([
            {
                input: "aBcd",
                expected: "ABCD"
            },
            {
                input: "abCd",
                expected: "ABCD"
            },
            {
                input: "ABCD",
                expected: "ABCD"
            }
        ])("$input should uppercase to $expected", ({ input, expected }) => {
            const sut = getStringInfo;

            const actual = sut(input);

            expect(actual.uppercase).toBe(expected);
        });

        it.each([
            {
                input: "aBcd",
                expected: 4
            },
            {
                input: "abCde",
                expected: 5
            },
            {
                input: "ABCD",
                expected: 4
            }
        ])("$input should have length $expected", ({ input, expected }) => {
            const sut = getStringInfo;

            const actual = sut(input);

            expect(actual.characters).toHaveLength(expected);
        });


    });
});