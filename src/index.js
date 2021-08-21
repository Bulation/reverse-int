module.exports = function reverse (n) {
    k = String(n);
    if (n < 0)
        k = k.slice(1);
    return +k.split('').reverse().join('');
}
