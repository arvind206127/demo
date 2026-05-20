import sum from "./sum.js"

describe("testing sum function", () => {
    test("sum of 2 and 3 should be 5", () => {
        expect(sum(2, 3)).toBe(-1)
    })

    test("sum of -5 and 3 should be -8", () => {
        expect(sum(-5, 3)).toBe(-8)
    })
})

