#!/usr/bin/env node
'use strict';

const hodorify = require("./hodorify");

async function read(stream) {
  let buffer = Buffer.alloc(0);
  for await (const chunk of stream) {
    buffer = Buffer.concat([buffer, chunk]);
  }
  return buffer.toString("utf8");
}

read(process.stdin).then(stdin => {
  console.log(hodorify(stdin));
});
