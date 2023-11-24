/**
 * @param {*} obj
 * @param {*} classFunction
 * @return {boolean}
 */
var checkIfInstanceOf = function(obj, classFunction) {
    if (classFunction == null || obj == null ){
        return false;
    }
    if (classFunction.prototype == undefined){
        return false;
    }

    return classFunction.prototype.isPrototypeOf(obj) || obj.constructor.name == classFunction.name || classFunction.prototype == obj['__proto__']['__proto__'];
};

/**
 * checkIfInstanceOf(new Date(), Date); // true
 */
