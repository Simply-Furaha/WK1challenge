// Function to perform Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;
    // Loop to access each array element
    for (let i = 0; i < n - 1; i++) {
        // Loop to compare array elements
        for (let j = 0; j < n - i - 1; j++) {
            // Compare and swap if the elements are in the wrong order
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Sample input
let sampleInput = [5, 6, 1, 3, 4, 2];
console.log(bubbleSort(sampleInput)); // Expected output: [1, 2, 3, 4, 5, 6]

// Function to create a staircase
function steps(n) {
    // Loop through each level
    for (let i = 1; i <= n; i++) {
        // Initialize an empty string for each level
        let step = '';
        // Add # characters according to the current level
        for (let j = 1; j <= i; j++) {
            step += '#';
        }
        // Log the current level step
        console.log(step);
    }
}

// Sample inputs
steps(2);
/*
#
##
*/

steps(3);
/*
#
##
###
*/


// Class definition for Cylinder
class Cylinder {
    // Constructor to initialize radius and height
    constructor(radius, height) {
        this.radius = radius;
        this.height = height;
    }

    // Method to calculate the volume of the cylinder
    getVolume() {
        return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
    }
}

// Creating an instance of the Cylinder class
let myCylinder = new Cylinder(5, 10);

// Calculating and logging the volume
console.log(myCylinder.getVolume()); // Expected output: 785.3982
