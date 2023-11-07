//https://www.codewars.com/kata/54c27a33fb7da0db0100040e/solutions/javascript

function isSquare(n) {
    return Math.sqrt(n) % 1 === 0;
  }

  //https://www.codewars.com/kata/55908aad6620c066bc00002a/solutions/javascript

  function XO(str) {
    let str = str.ToLowerCase()
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    if (x===o) {
        return true 
    } else{
        return false
    }

    //https://www.codewars.com/kata/55b42574ff091733d900002f/solutions/javascript
    function friend(friends){
        let friendName = friends.filter(friends => friends.length === 4);
        return friendName
      }