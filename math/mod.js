module.exports = function ( n, m ) {
  let remainder = n % m;
  let shifted = Number(remainder) + Number(m);
  let trueMod = shifted % m;
  return trueMod;
  // return ( ( n % m ) + m ) % m;
};
