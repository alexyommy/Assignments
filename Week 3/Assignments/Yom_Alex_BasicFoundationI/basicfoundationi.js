// 1.    Get 1 to 255
function createArray() {
    var newArray = [];
    for (var i = 0; i <= 255; i++) {
        newArray.push(i);
    }
    return newArray;
}
var result = createArray();
// console.log(result);

// 2.   Get even 1000
function evenArray() {
    var sum = 0;
    for (var i = 1; i <= 1000; i++ ) {
        if(i%2==0) {
            sum+=i;
        }
    }
    return sum;
}
// console.log(evenArray());

// 3.   Sum odd 5000
function oddArray() {
    var sum = 0;
    for (var i = 1; i <= 5000; i++ ) {
        if (i%2==1) {
            sum+=i;
        }
    }
    return sum;
}
// console.log(oddArray());

// 4.   Iterate an array
function iterate(numArr){
    var sum = 0;
    for (var i = 0; i < numArr.length; i++){
        sum+=numArr[i];
    }
    return sum;
}
// console.log(iterate([3,5,8]));

// 5.   Find max
function findMax(numArr){
    var max = numArr[0];
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i] > max){
            max = numArr[i];
        }
    }
    return max;
}
// console.log(findMax([1,7,5,8,9]));

// 6.   Find average
function average(numArr){
    var sum = 0;
    var avg = 0;
    for ( var i = 0; i < numArr.length; i++){
        sum += numArr[i]
    }
    avg = sum / numArr.length;
    return avg;
}
// console.log(average([3,2,2,5]));

// 7.   Array odd 1 to 50
function oddArray(){
    var newArray = [];
    for (var i = 1; i < 50; i++){
        if (i%2==1){
        newArray.push(i);
        }
    }
    return newArray;
}
// console.log(oddArray());

// 8.   Greater than Y
function greaterThan(numArr){
    var y = 3;
    var qty = 0;
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i]>y){
            qty+=1;
        }
    }
    return qty;
}
// console.log(greaterThan([1,4,5,2]));

// 9.   Squares
function squares(numArr){
    for (var i = 0; i < numArr.length; i++){
        numArr[i] = numArr[i] * numArr[i];
    }
    return numArr;
}
// console.log(squares([1,5,10,-2]));

// 10.  Negatives
function negatives(numArr){
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i]<0){
        numArr[i] = 0;
        }
    }
    return numArr;
}
// console.log(negatives([1,5,10,-2]));

// 11.  Max/Min/Avg
function maxMinAvg(numArr){
    var max = numArr[0];
    var min = numArr[0];
    var sum = numArr[0];
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i]>max){
            max = numArr[i];
        }
        if (numArr[i]<min){
            min = numArr[i];
        }
        sum+=numArr[i];
        var avg = sum / numArr.length;
        var newArr = [max,min,avg];
    }
    return newArr;
}
// console.log(maxMinAvg([1,5,10,-2]));

// 12.  Swap Values
function swapVal(numArr){
    for (var i = 0; i < numArr.length; i++){
        temp = numArr[0];
        numArr[0] = numArr[numArr.length-1];
        numArr[numArr.length-1] = temp;
        return numArr;
    }
}
// console.log(swapVal([1,5,10,-2]));

// 13.  Number to String
function numToStr(numArr){
    for (var i = 0; i < numArr.length; i++){
        if(numArr[i]<0){
            numArr[i]="Dojo";
        }
    }
    return numArr;
}
// console.log(numToStr([-1,-3,2]));