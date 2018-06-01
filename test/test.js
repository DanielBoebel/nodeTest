const main = require("../main");

const chai = require("chai");
const assert = chai.assert;

/*describe("Make a human", () => {
    it("should make a functional human", ()=>{
        const testHuman = main.makeAHuman();
        assert.equal(testHuman.canUseTools,true)
        assert.deepEqual(testHuman.bodyParts,["head","torso","arms","legs"]);
    });
});*/


describe("Study for exam",()=>{
    it("Shouldnt stree you out to much"), () => {
    const studyForExam = main.studyForExam
    assert.notEqual(studyForExam, "worry a lot and study to memorize shot-term but then forgot afterwards")
    }
})