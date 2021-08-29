const rewire = require("rewire")
const main = rewire("./main")
const Page1 = main.__get__("Page1")
// @ponicode
describe("UNSAFE_componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new Page1()
    })

    test("0", () => {
        let callFunction = () => {
            inst.UNSAFE_componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})
