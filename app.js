module.exports = function italify(str) {
  if (str === undefined) {
    return "🤌";
  }

  if (str === "pasta") {
    return "❤️";
  }

  if (typeof str !== "string") {
    throw "Strings only please 🤌";
  }
  return str.concat(" 🤌");
};
