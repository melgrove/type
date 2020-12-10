module.exports = (val, vectorize=false) => {
    const check = e => Object.prototype.toString.call(e).slice(8, -1).toLowerCase();
    if(arguments.length == 0) throw Error('Must pass an argument');
    if(vectorize) {
       if(check(val) != 'array') throw Error('First Argument must be an array if vectorize = true');
       return val.map(e => check(e));
    };
    return check(val);
};