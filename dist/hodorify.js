(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('case')) :
  typeof define === 'function' && define.amd ? define(['case'], factory) :
  (global = global || self, global.hodorify = factory(global.Case));
}(this, function (Case) { 'use strict';

  Case = Case && Case.hasOwnProperty('default') ? Case['default'] : Case;

  function hodorify(subjectString) {
    const rgx = /([a-z])\w+/gi;
    return subjectString.replace(rgx, function(stringToReplace) {
      const caseOfSubject = Case.of(stringToReplace);
      const caseToReturn =
        typeof caseOfSubject === "undefined" ? "lower" : caseOfSubject;

      return Case[caseToReturn]("Hodor");
    });
  }

  return hodorify;

}));
