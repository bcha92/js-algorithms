// Sorting Algorithms -- Selection Sort //
function selectionSort(arr) {
    const newArr = []; // New Array is Created
    const length = arr.length; // Stores initial Array Length value in Length
    // because as the old array shrink, so does the arr.length value
    // keeping it in constant variable length is the only sensible option.
    let temp; // A temporary storage unit for array item
    for (let i = 0; i < length; i++) {
        console.log("index:", i, "old Array:", arr, "new Array:", newArr);
        // For each iteration, Math.min draws out the lowest number in the array,
        temp = Math.min(...arr); // stores the value in temp,
        newArr.push(temp); // pushes the value into new array,
        arr.splice(arr.indexOf(temp), 1); // and removes it from the old array,
        // in order to draw out the next lowest value left in the old array
    }
    console.log("new Array:", newArr, "old Array:", arr);
    return newArr; // The function returns newArr as the output
    // By this time, the old array would output this empty array [];
}

// Tests
// (Add some others!)
compareArrays(selectionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(selectionSort([8, 6, 0, 9, 7]), [0, 6, 7, 8, 9]);
compareArrays(selectionSort([191, 12, 44, 64, 56]), [12, 44, 56, 64, 191]);

// Test code
function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
        console.log('✅ Test succeeded');
    } else {
        console.log(`⛔️ Expected “${result}” to equal “${value}”`);
    }
}
