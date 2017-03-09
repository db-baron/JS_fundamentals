var _ = {
   map: function(arr, callback) {
       for (var i = 0; i < arr.length; i++) {
           arr[i] = callback(arr[i]);
           console.log(arr[i]);
       }
   },
   reduce: function(array, callback, memo){
       var memo = memo;
       for (var i = 0; i < array.length; i++) {
            memo = callback(array[i], memo);
       }
    //    console.log(memo);
       return memo;
    },
}
   // find: function() {
   //   // code here;
   // },
   // filter: function() {
   //   // code here;
   // },
   // reject: function() {
   //   // code here;
   // }
 // }
// you just created a library with 5 methods!


var arr1 = [1, 3, 6];

// function mult_by5(num){
//     return num*5;
// }
// _.map(arr, mult_by5);
// _.map(arr1, function(num){return num * 5;});

function sumFun(memo, num){
    return memo + num;
}
_.reduce(arr1, sumFun, 0);
console.log(_.reduce(arr1, sumFun, 0));
