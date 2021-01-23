const arry = [1,2,3,4,5]

// arry.forEach(function(val, i, arry) {
//   console.log(val, i, arry);
// })

// 上記の簡略化の書き方
arry.forEach(v => console.log(v));

// for(let i = 0; i < arry.length; i++) {
//   const v = arry[i];
//   console.log(v);
// }