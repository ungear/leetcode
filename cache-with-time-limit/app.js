// https://leetcode.com/problems/cache-with-time-limit/

var TimeLimitedCache = function() {
    this.store = {};
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    const existingValue = this.store[key];
    const currentTimestamp = new Date().getTime();

    const returnFlag = existingValue === undefined 
      ? false
      : existingValue.deadline < currentTimestamp
        ? false
        : true;

    this.store[key] = { value, deadline: currentTimestamp + duration };
    return returnFlag;
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    const existingValue = this.store[key];
    if(existingValue !== undefined){
      const currentTimestamp = new Date().getTime();
      const isExpired = existingValue.deadline < currentTimestamp;
      if(isExpired){
        return -1;
      } else {
        return existingValue.value
      }
    } else {
      return -1;
    }
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    const currentTimestamp = new Date().getTime();

    return Object.values(this.store)
      .map(x => x.deadline)
      .filter(x => x > currentTimestamp)
      .length
};


//Your TimeLimitedCache object will be instantiated and called as such:
var obj = new TimeLimitedCache()
console.log(obj.set(1, 42, 1000)); // false
console.log(obj.get(1)) // 42
console.log(obj.count()) // 1
