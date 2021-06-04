const { expect } = require("chai");
const chai = require("chai");
const italify = require("../app");

describe("italify", () => {
  it("should italify", () => {
    const italifiedString = italify("capricciosa");
    const italifiedString2 = italify("Hello! My name is Johan.");

    expect(italifiedString).to.equal("capricciosa 🤌");
    expect(italifiedString2).to.equal("Hello! My name is Johan. 🤌");
  });
  it("should only accept strings", () => {
    expect(italify.bind(italify, 7)).to.throw("Strings only please 🤌");
    expect(italify.bind(italify, ["🤌"])).to.throw("Strings only please 🤌");
    expect(italify.bind(italify, {})).to.throw("Strings only please 🤌");
    expect(italify.bind(italify, true)).to.throw("Strings only please 🤌");
  });
  it("should handle no arguments", () => {
    const italy = italify();
    expect(italy).to.equal("🤌");
  });
  it("should return ❤️ if argument is pasta", () => {
    const pasta = italify("pasta");
    expect(pasta).to.equal("❤️");
  });
});
