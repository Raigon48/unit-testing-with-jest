import { StringUtils } from "../../src/utils/StringUtils"

describe("StringUtils class test suite", () => {

    describe("test toLowercase", () => {
        let stringUtils: StringUtils;

        beforeEach(() => {
            stringUtils = new StringUtils();
        });

        afterEach(() => {
            console.log("Teardown");
        });

        it("ABC should lowercase to abc", () => {
            const expected = "abc";

            const actual = stringUtils.toLowercase("ABC");

            expect(actual).toBe(expected);
        });

        it.each([
            {
                input: "Abc",
                expected: "abc"
            },
            {
                input: "ABc",
                expected: "abc"
            }
        ])("$input should lowercase to $output", ({ input, expected }) => {
            const actual = stringUtils.toLowercase(input);

            expect(actual).toBe(expected);
        });

        test("should throw an error - Invalid argument using function", () => {
            function expectError() {
                stringUtils.toLowercase('');
            }

            expect(expectError).toThrow("Invalid Argument");
        });

        test("should throw an error - Invalid argument using arrow function", () => {

            expect(() => {
                stringUtils.toLowercase('');
            }).toThrow("Invalid Argument");
        });

        test.only("shoulwd throw an error - Invalid Argument using try catch", (done) => {
            try {
                stringUtils.toLowercase('');
                done("Should fail with invalid argument");
            } catch (error) {
                expect(error).toBeInstanceOf(Error);
                done();
            }
        })
    })
})