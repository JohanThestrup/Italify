const { expect } = require("chai");
const chai = require("chai");
const italify = require("../app");

describe("italify", () => {
  it("should italify", () => {
    const italifiedString = italify("capricciosa");
    const italifiedString2 = italify("Hello! My name is Johan.");

    expect(italifiedString).to.equal("capricciosa🤌");
    expect(italifiedString2).to.equal("Hello! My name is Johan.🤌");
  });
});
