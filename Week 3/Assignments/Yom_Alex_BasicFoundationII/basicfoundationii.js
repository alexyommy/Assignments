//  1. Biggie Size
function biggie(numArr){
    for (var i = 0; i < numArr.length; i++){
        if (numArr[i]>0){
            numArr[i]="big";
        }
    }
    return numArr;
}
// console.log(biggie([-1,3,5,-5]));

//  2. Print Low, Return High
function printLowReturnHigh(arr){
    var lowest = arr[0];
    var highest = arr[0];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < lowest){
            lowest = arr[i];
        }
        if (arr[i] > highest){
            highest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
}
// console.log(printLowReturnHigh([-1,-5,10,-8,12]));

//  3. Print One, Return Another
function printOneReturnAnother(arr){
    console.log(arr[arr.length-2]);
    for (var i = 0; i < arr.length; i++){
        if (arr[i] % 2 == 1){
            return arr[i];
        }
    }
}
// console.log(printOneReturnAnother([2,1,3,4,5]));

//  4. Double Vision
function doubleVision(arr){
    for (var i = 0; i < arr.length; i++){
        arr[i]=arr[i]*2
    }
    return arr;
}
// console.log(doubleVision([1,2,3]));

//  5. Count Positives
function countPositives(arr){
    var positives = 0;
    for (var i = 0; i < arr.length; i++){
        if (arr[i]>0){
            positives=positives + 1;
        }
        arr[arr.length-1]=positives;
    }
    return arr;
}
// console.log(countPositives([-1,1,1,1]));

//  6. Even and Odds
function evensAndOdds(arr){
    odds = 0;
    evens=0;
    for (var i = 0; i < arr.length; i++){
        if(arr[i]%2==1){
            if(arr[i+1]%2==1){
                if(arr[i+2]%2==1){
                    console.log("That's odd!");
                }
            }
        }
        if(arr[i]%2==0){
            if(arr[i+1]%2==0){
                if(arr[i+2]%2==0){
                    console.log("Even more so!");
                }
            }
        }
    }
}
// evensAndOdds([1,3,5,8,2,4]);

//  7. Increment the Seconds
function incrementTheSeconds(arr){
    for(var i = 0; i < arr.length; i++){
        if(i%2==1){
            arr[i]=arr[i]+1;
            console.log(arr[i]);
        }
    }
    return arr;
}
// console.log(incrementTheSeconds([0,2,3,4,5]));

//  8. Previous Lengths
function previousLengths(arr){
    for(var i = (arr.length-1); i > 0; i--){
        arr[i]=arr[i-1].length;
    }
    return arr;
}
// console.log(previousLengths(["hello","dojo","awesome"]));

//  9. Add Seven

// Create a function that takes in an array
// Creates a new arr variable
// iterates (for loop) through array
// add 7 to each iteration
// push new number to new arr
// return new arr

function addSeven(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(arr[i]+7);
    }
    return newArr;
}
// console.log(addSeven([1,2,3]));

//  10. Reverse Array
function reverseArray(arr){
    for (var i = 0; i < arr.length/2; i++){
        var temp = arr[i];
        arr[i]=arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
// console.log(reverseArray([3,1,6,4,2]));

//  11. Outlook: Negative 
function outlookN(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = arr[i] * -1;
        }
    }
    return arr;
}
// console.log(outlookN([1,-3,5]));

//  12. Always Hungry
function alwaysHungry(arr){
    var gotFood = false;
    for(i = 0; i < arr.length; i++){
        if(arr[i] === "food"){
            console.log("yummy");
            gotFood = true;
        }
    }
    if(gotFood == false){
        console.log("I'm hungry");
    }
}
// alwaysHungry([2,1,1,4]);

//  13. Swap Toward the Center
function centerSwap(arr){
    for(var i = 0; i < arr.length/2; i+=2){
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
// console.log(centerSwap([1,2,3,4,5,6]));

//  14. Scale the Array
function scaleArray(arr){
    var num = 3;
    for(var i = 0; i < arr.length; i++){
        arr[i]=arr[i] * num;
    }
    return arr;
}
// console.log(scaleArray([1,2,3]))