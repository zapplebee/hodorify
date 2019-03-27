'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Case = _interopDefault(require('case'));

function hodorify(subjectString) {
  const rgx = /([a-z])\w+/gi;
  return subjectString.replace(rgx, function(stringToReplace) {
    const caseOfSubject = Case.of(stringToReplace);
    const caseToReturn =
      typeof caseOfSubject === "undefined" ? "lower" : caseOfSubject;

    return Case[caseToReturn]("Hodor");
  });
}

module.exports = hodorify;
