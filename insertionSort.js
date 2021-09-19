// Sorting Algorithms -- Insertion Sort //
function insertionSort(arr) {
    // Function to swap positions of adjacent array items
    const swap = (a) => {
        let temp = arr[a + 1];
        arr.splice(a + 1, 1);
        arr.splice(a, 0, temp);
    };
    for (let i = 0; i < arr.length; i++) {
        console.log("index:", i, "array:", arr);
        if (i === arr.length - 1) {break}; // Once array reaches last position, the loop will break without iterating because the array cannot swap itself with an empty space next to it
        if (arr[i] > arr[i + 1]) { // If array number is greater than the adjacent number,
            swap(i); // Swap function is initiated
            i = -1; // Resets the for loop. Set to -1 because at end of loop, i will ++ and start again as "0"
        }
    }
    console.log("final array output:", arr);
    return arr; // returns original array (changed because of splice method)
}

// Tests
// (Add some others!)
compareArrays(insertionSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(insertionSort([7, 777, 69, 96, 4]), [4, 7, 69, 96, 777]);
compareArrays(insertionSort([123, 456, 789, 234, 567, 890]), [123, 234, 456, 567, 789, 890]);

// Test code
function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
        console.log('✅ Test succeeded');
    } else {
        console.log(`⛔️ Expected “${result}” to equal “${value}”`);
    }
}
