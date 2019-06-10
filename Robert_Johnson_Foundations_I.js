//Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
function chg(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr[i] = "big";
        }
    }
    return arr;
}
console.log(chg([1,-2,3,-4]));
//Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
function swp(arr){
    var z =arr[0];
    var x = arr[0];
  
    for(i = 0; i < arr.length; i++){
        var temp=arr[i];
        if(temp > z){
            z = arr[i]
        }
        if(temp <  x){     
          x = arr[i]
        }
    }
      document.write(x);
      return z;
  }
   console.log(swp([1,2,6,7,3]));
//Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
function prnt(arr){
    document.write(arr[arr.length-2]);
    for(i = 0; i < arr.length; i++){
       
        if(arr[i] % 2 === 1){
            return arr[i];
        }
    } 
}
console.log(prnt([4,4,6,2,8,5]));
//Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
function vis(arr){
    var temp = [];
        for(i = 0; i < arr.length; i++){
            temp[i] = arr[i]+arr[i];        
        }
    return temp[];
}
//Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
function count(arr){
    sum = 0;
        for(i = 0; i < arr.length; i++){
            if(arr[i] > 0;){
                sum += arr[i];
            }
        arr[arr.length - 1] = sum;
     }
     return arr;
}
//Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
function Odd(a){
    evens=0;
    odds=0;
    for(i = 0; i < a.length; i++){
        if(a[i] % 2 === 0){
            evens++;
            if (i !== 0 && odds !== 0)
                odds = 0;
            }
            else if(a[i] % 2 === 1){
                odds++;
                if (i !== 0 && evens !== 0)
                    evens = 0;
                }
        if (evens === 3){
            console.log("Even more so!");
            evens = 0;
        }
        else if (odds === 3){
            console.log("That's Odd!")
                odds = 0;    
        }
    }
}
Odd([2,2,2,3,3,3,1,2,3,3,3,4,5,6,6,6,1]);


//Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.

function ince(arr){
    (i = 0; i < arr.length; i++){
        if(i % 2 !== 0){
            arr[i] = 2;
        }
    }
    return arr;
}
//Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?

fucntion prev(arr){
    var temp;
    for(i = arr.length-1; i > 0; i--){
        temp = (arr[i-1].length); 
        arr[i] = temp;
    } 
return arr;
}

//Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.

function seven(a){
    arr = [];
    for (var i = 0; i < a.length; i++){
        arr.push(a[i] + 7);
    }
    return arr;
}
a = [1,2,3];
console.log(seven(a));
console.log(a);



//Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverse(a){
    var temp;
    for (var i = 0; i < (a.length/2); i++){
        temp = a[i];
        a[i] = a[a.length -1 - i];
        a[a.length - 1 - i] = temp;
    }
    return a;
}
console.log(reverse([3,1,6,4,2]));
//Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].

function neg(a){
    arr=[];
    for(i=0;i<a.length;i++){
        if (a[i]>0)
            arr.push(a[i]*-1);
        else 
        arr.push(a[i]);
    }
    return arr; 
}
console.log(neg([1,-3,5]));

//Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.

function food(a){
    var num=0;
    for(i=0;i<a.length;i++){
        if (a[i]==='food')
            document.write('yummy ');
        
        else
            num++;   
    }
   
  if (num==a.length)
          document.write('Always hungry!');
            
}
food(["none", "none", "none"]);

//Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.

function center(a){
    var temp;
    for(i=0; i<(a.length/2) && i!==(a.length/2);i++){
        temp = a[i];
        a[i] = a[a.length - (i+1)];
        a[a.length-(i+1)] = temp; 
    }
    console.log(a);
}
center([1,2,3,4,5,6]);

//Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].

function array(a,b){
    for(i=0; i<a.length; i++){
        a[i] *= b;
    }
    return a;
}
console.log(array([1,2,3], 3));