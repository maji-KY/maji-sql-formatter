import {} from "jasmine";

import sqlFormatter from "../main/sqlFormatter";

describe("sqlFormatter", function() {
    it("throws error when unsupported language parameter specified", function() {
        expect(() => {
            sqlFormatter.format("SELECT *", {language: "blah"});
        }).toThrow(new Error("Unsupported SQL dialect: blah"));
    });
});
