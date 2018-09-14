/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */

module.exports = function getLoveTrianglesCount(preferences = []) {
  var l=preferences.length;
  var count=0;
  for (var i=0; i<=l-1; i++) {
    var a=preferences[i];
    var b=preferences[a-1];
    var c=preferences[b-1]-1;
    if (i == c && a != b) {count=count+1};
  }
  return count=count/3
}
