const repeatString = function(string, number) {
    if (number < 0) {
        return "ERROR";
      }
      let sanitizedString = string;
      if (typeof string !== "string") {
        sanitizedString = string.toString();
      }

      let finalOutcome = "";
      for (let i = 1; i<=number; i++){
        finalOutcome += sanitizedString;
      }
      return finalOutcome;
};

// Do not edit below this line
module.exports = repeatString;
