const readline = require('readline');

// Creating an interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Defining a function to generate a student's grade based on marks
function generateStudentGrade(marks) {
    // Checking the range of marks and returning the corresponding grade
    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 50 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 49) {
        return 'D';
    } else {
        return 'E';
    }
}

// Prompting the user for input and processing it
rl.question("Enter the student's marks (between 0 and 100): ", function(marks) {
    marks = parseInt(marks);

    // Checking if the input is valid
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log('Invalid input. Please enter a number between 0 and 100.');
    } else {
        // Generating and logging the student's grade
        const grade = generateStudentGrade(marks);
        console.log(`The student's grade is: ${grade}`);
    }

    // Closing the readline interface
    rl.close();
});
