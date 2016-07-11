/**
 * Created on 2/10/2016.
 */
describe("StringUtils.format", function() {
    it("formats strings without placeholders", function(){
        var phrase = "Plain phrase";
        expect(StringUtils.format(phrase)).toEqual(phrase);
    });

    it("formats a phrase with one placeholder", function() {
        var phrase = "I am {0}!";
        expect(StringUtils.format(phrase, "Batman")).toEqual("I am Batman!");
    });

    it("formats a phrase with multiple placeholders", function() {
        var phrase = "Just hangin' out in the {0} with my main man {1} and home boy {2}.";
        expect(StringUtils.format(phrase, "Batcave", "Alfred", "Robin"))
            .toEqual("Just hangin' out in the Batcave with my main man Alfred and home boy Robin.");
    });

    it("replaces placeholders in the correct order", function() {
        var phrase = "Now, {1}! Punch {0} in the face!";
        expect(StringUtils.format(phrase, "Joker", "Robin"))
            .toEqual("Now, Robin! Punch Joker in the face!");
    });

    it("replaces duplicate placeholders correctly", function() {
        var phrase = "{0} {0} {0} {0} {0} {0} {0} {0} {1}";
        expect(StringUtils.format(phrase, "Na", "Batman")).toEqual("Na Na Na Na Na Na Na Na Batman");
    });
});

