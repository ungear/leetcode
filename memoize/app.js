// https://leetcode.com/problems/memoize/

/**
 * @param {Function} fn
 */
function memoize(fn) {
  const calls = [];
  function argsToString (args){
      return args.join('_');
  }
  return function(...args) {
      const recordedResult = calls[argsToString(args)];
      if(recordedResult !== undefined){
          return recordedResult
      } else{
          const result = fn.apply(null, args);
          calls[argsToString(args)] = result;
          return result
      }
  }
}

