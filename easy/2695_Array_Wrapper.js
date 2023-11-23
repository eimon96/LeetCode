/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    sum = 0
    for (let i = 0; i < this.nums.length; i++){
        sum += this.nums[i];
    }
    return sum;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    if (this.nums.length == 0){
        return "[]";
    }
    
    let sum = "["
    for (let i = 0; i < this.nums.length; i++){
        sum += this.nums[i];
        if (i == this.nums.length - 1){
            sum += "]";
        }
        else {
            sum += ","
        }
    }
    return sum;
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
