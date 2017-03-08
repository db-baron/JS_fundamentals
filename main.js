var x = [3,5,"Dojo", "rocks", "Michael", "Sensei"];
for (i in x) {
    console.log(i);
}
x += ["hello", "world", "JavaScript is Fun"];
console.log(x);
var sum = 0;
for (var i = 0; i <= 100; i++) {
    sum += i;
}
console.log(sum);
var newlist = [1, 5, 90, 25, -3, 0];
var min = newlist[0];
var sumforAve = 0;
for (var i = 0; i < newlist.length; i++) {
    sumforAve += newlist[i];
    if (newlist[i] < min){
        min = newlist[i];
    }
}
console.log(min);
console.log(sumforAve/newlist.length);   // The average

// Write a for-in loop that will navigate through the object below
var newNinja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}
for (i in newNinja){
    console.log(newNinja[i]);
}
document.body.innerHTML = "Woooooo!";
document.body.innerHTML = min + "Allright!";
// document.body.innerHTML = newNinja;
