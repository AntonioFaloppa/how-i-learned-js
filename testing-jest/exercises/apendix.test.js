const apendix = require('./apendix');

describe("A function recieves symptoms and give diagnose", () => {
    it("if hurts 7/10, did not went to the bathroom in three days and color blue, 'go to the hospital'", () => {
        const diagnose = apendix({
            pain: 7,
            color: "blue",
            noPooDays: 3
        });
        expect(diagnose).toBe("go to hospital");
    });
    it("if hurts less than 5, 'no worries'", () => {
        const diagnose = apendix({
            pain: 4
        });
        expect(diagnose).toBe("no worries");
    });
    it("if hurts more than 5 but less than 7 and did not went to the bathroom in three days, 'take Festal'", () => {
        const diagnose = apendix({
            pain: 5,
            noPooDays: 3
        });
        expect(diagnose).toBe("take Festal");
    });
});