(function() {
  "use strict";

  function hodorify(subjectString) {
    var rgx = /([a-z])\w+/gi;
    return subjectString.replace(rgx, "hodor");
  }

  if (typeof module !== "undefined" && module.exports) {
    hodorify.default = hodorify;
    module.exports = hodorify;
  } else if (
    typeof define === "function" &&
    typeof define.amd === "object" &&
    define.amd
  ) {
    define("hodorify", [], function() {
      return hodorify;
    });
  } else {
    window.hodorify = hodorify;
  }
})();
