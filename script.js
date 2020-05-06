var answers = document.getElementById("fibonacci-numbers");
var memoize = [];

function fibonacci(num) {
     memoize[0] = 0;
     memoize[1] = 1;
     if (num === 0) {
          return memoize[0];
     } else if (num === 1) {
          return memoize[1];
     } else {
          memoize[num] = memoize[num - 2] + memoize[num - 1];
          return memoize[num];
     }
}

function printFibonacci(num) {
     const t0 = performance.now();
     answers.innerText = "";
     for (var i = 0; i < num; i++) {
          answers.innerHTML += "<p>" + fibonacci(i) + "</p>";
     }
     const t1 = performance.now();

     var time = document.getElementById("performance");
     time.innerText += " " + Number(t1 - t0) + "ms";
}

var array = [];
function randomArray(size) {
     for (var i = 0; i < size; i++) {
          array.push(Math.floor(Math.random() * 100));
     }
}

function twoNumberSome(target, arr) {
     var m;
     var i;
     var isFound = false;
     let t0 = performance.now();
     for (i = 0; i < arr.length; i++) {
          // find the
          m = target - arr[i];
          if (memoize[m]) {
               printTwoNumberSum(arr[i], m);
               isFound = true;
               break;
          } else {
               memoize[i] = true;
          }
     }

     if (!isFound) {
          document.getElementById("two-number-sum").innerHTML =
               "<p>There is no match</p>";
     }
     let t1 = performance.now();
     var time = document.getElementById("performance");
     time.innerText += " " + Number(t1 - t0) + "ms";
}

function printTwoNumberSum(x, y) {
     const twoNumberSum = document.getElementById("two-number-sum");
     twoNumberSum.innerHTML += "<p>" + x + "," + y + "</p>";
}

randomArray(20);
twoNumberSome(33, array);
