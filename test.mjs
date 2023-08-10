#!/usr/bin/env zx
import { $ } from 'zx'

function proxyFunctions(proxiedFunctions) {
  return function (targetFunction) {
    const originalFunction = targetFunction;
    const proxiedFunction = zx.wrap(originalFunction);

    // Add a console log before and after the function is called.
    proxiedFunction.on('before', (args) => {
      console.log('Calling function', targetFunction.name, 'with arguments', args);
    });
    proxiedFunction.on('after', (result) => {
      console.log('Function', targetFunction.name, 'returned', result);
    });

    return proxiedFunction;
  };
}


console.log(123)


// await $`git log`;

const s = "git log";

$.quote = function (command) {
  return command
}


export async function fn1  ()  {
  await $`${s}`;
}
