// Sorting Algorithms -- Bubble Sort //
function bubbleSort(arr) {
    // Function to swap positions of adjacent array items
    const swap = (a) => {
        let temp = arr[a + 1];
        arr.splice(a + 1, 1);
        arr.splice(a, 0, temp);
    };
    let len = arr.length - 1;
    for (let i = 0; i < len; i++) {
        console.log("indexA:", i);
        for (let j = 0; j < len + 1; j++) {
            console.log("indexB:", j, "array:", arr)
            if (j === len) {break}; // Once array reaches last position, the loop will break without iterating because the array cannot swap itself with an empty space next to it
            if (arr[j] > arr[j + 1]) { // If array number is greater than the adjacent number,
                swap(j); // Swap function is initiated
            }
            // Unlike in insertionSort(), a bubble sort requires you to go through all the iterations and then start the process again based on how long the length of the original array is, minus 1.
        }
    }
    console.log("output:", arr);
    return arr;
}

// Tests
// (Add some others!)
compareArrays(bubbleSort([1, 5, 2, 4, 3]), [1, 2, 3, 4, 5]);
compareArrays(bubbleSort([24, 79, 34, 99]), [24, 34, 79, 99]);
compareArrays(bubbleSort([999, 534, 2, 177, 49]), [2, 49, 177, 534, 999]);

// Test code
function compareArrays(arr1, arr2) {
    if (arr1.join(',') === arr2.join(',')) {
        console.log('✅ Test succeeded');
    } else {
        console.log(`⛔️ Expected “${result}” to equal “${value}”`);
    }
}
