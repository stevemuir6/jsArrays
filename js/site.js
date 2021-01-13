let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//Wire up a button with a named function
document.getElementById("btnSubmit").addEventListener("click", doJsWork);


//Main driver function for app
function doJsWork() {
    numbers = generateArray();
    let element = document.getElementById("result");
    let element2 = document.getElementById("result2");
    let element3 = document.getElementById("result3");

    // output1.innerHTML = "";
    // output2.innerHTML = "";
    // output3.innerHTML = "";

    //step 2 add numbers to the array
    let size = numbers.length;
    size = numbers.push(11);
    size = numbers.push(12);

    //step 3
    //remove the last number from an array
    //numbers.pop();
    //remove the first number from the array
    //numbers.shift();

    //step 4 - Note Returns an Array
    //return all numbers > 5;
    //return numbers = 5;
    //return numbers less than 5;
    var filtered = numbers.filter(function (value, index, arr) {
        return value > 5;
    });

    //step 5 
    //find a value in the array
    var found = numbers.find(function (value, index, arr) {
        return value > 5;
    });

    //step 6
    //find an item using includes 
    var found = numbers.includes(5);

    //step 7
    var findNum = parseInt(document.getElementById("findNum").value);
    var found = numbers.includes(findNum);

    //show the results//
    element3.innerHTML = found;

    for (let index = 0; index < numbers.length; index++) {
        let num = numbers[index];
        element.innerHTML += `${num} `;
    }

    for (let index = 0; index < filtered.length; index++) {
        let num = filtered[index];
        element2.innerHTML += `${num} `;
    }



}

function generateArray(len) {
    const ARRAY_LENGTH = parseInt(document.getElementById("arrayNum").value);
    const randomArray = [];
    for (let i = 0; i < ARRAY_LENGTH; i++) {
        randomArray.push(Math.floor(Math.random() * 100) + 1);
    }
    return randomArray;
}