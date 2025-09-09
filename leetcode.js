var num = 1235321;

function isPalindrome(num) {
  let str = String(num);
 
  let l = 0;
  let r = str.length - 1;

  while (r > l) {
    if (l==r) {
        break;
    }else if (str.charAt(l) !== str.charAt(r)) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}

console.log(isPalindrome(num));
