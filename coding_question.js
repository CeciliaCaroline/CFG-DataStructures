/**
 * Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. 
For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4] and so do the numbers [2, 4]. 
Note that a single number in an array and the array itself are both valid subsequences of the array.
 */

function isSubSequence(array1, array2) {
    let i = 0; // pointer for array 1 [5,1,2,3,4]
    let j = 0; // pointer for array 2 [1,3,4]

    while (i < array1.length && array2.length) {
        // if elements that match
        if (array1[i] === array2[j]) {
            // move pointer only after a match
            j++
        }
        // always move the pointer
        i++
    }
    // if we found all elemnts of array2 then j should === to it's length
    if (j === array2.length) {
        return true
    } else {
        return false
    }
    // return j === array2.length

}
