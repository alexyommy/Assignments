//Print Values and Sum
sum=0;
var testArr = [6,3,5,1,2,4];
for (let i = 0; i < testArr.length; i++) {
    sum+=testArr[i];
    console.log("Num:",testArr[i],"Sum:",sum);
}

//Value * Position
for (let i = 0; i < testArr.length; i++) {
    testArr[i]=testArr[i]*i;
}
console.log(testArr);