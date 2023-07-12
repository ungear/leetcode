//https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/

/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function(functions) {
    const result = new Promise((resolve, reject) => {
        const promiseResults = [];
        let resolvedCounter = 0
        functions.forEach((fn, index) => {
            fn().then(res => {
                promiseResults[index] = res;
                resolvedCounter++;
                if(resolvedCounter === functions.length){
                    resolve(promiseResults);
                }
            }).catch((res) => {
                reject(res);
            })
        })
    });

    return result;
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */