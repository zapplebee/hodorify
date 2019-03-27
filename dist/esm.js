import Case from 'case';

function hodorify(subjectString) {
  const rgx = /([a-z])\w+/gi;
  return subjectString.replace(rgx, function(stringToReplace) {
    const caseOfSubject = Case.of(stringToReplace);
    const caseToReturn =
      typeof caseOfSubject === "undefined" ? "lower" : caseOfSubject;

    return Case[caseToReturn]("Hodor");
  });
}

export default hodorify;
