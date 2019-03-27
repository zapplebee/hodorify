const hodorify = require("./../dist/hodorify");
const { exec } = require("child_process");

describe("hodorify", () => {
  it("should turn Bran to Hodor", () => {
    expect(hodorify("Bran")).toEqual("Hodor");
  });

  it("should turn Bran Stark string to Hodor Hodor", () => {
    expect(hodorify("Bran Stark")).toEqual("Hodor Hodor");
  });

  it("should turn direworf to hodor", () => {
    expect(hodorify("direwolf")).toEqual("hodor");
  });

  it("work from the cli", async () => {
    function promisedExec(execString) {
      return new Promise((resolve, reject) => {
        exec(execString, (error, stdout, stderr) => {
          if (error) {
            reject(stderr);
            return;
          }
          resolve(stdout);
        });
      });
    }

    expect(await promisedExec('echo "pizza" | ./dist/bin.js')).toEqual(
      "hodor\n\n"
    );
  });
});
