// Defining a function to generate the grade for a student based on their marks
function generateStudentGrade() {
    //user to enter marks
    let marks = prompt("Enter the student's marks (between 0 and 100):");

    // Convert the input marks to a number
    marks = Number(marks);

    // Checking if marks are within the valid range (0 to 100)
    if (marks >= 0 && marks <= 100) {
        // Determining the grade based on the marks
        let grade;
        if (marks > 79) {
            grade = 'A'; // Marks greater than 79 receive an 'A'
        } else if (marks >= 60) {
            grade = 'B'; // Marks between 60 and 79 (inclusive) receive a 'B'
        } else if (marks >= 49) {
            grade = 'C'; // Marks between 49 and 59 (inclusive) receive a 'C'
        } else if (marks >= 40) {
            grade = 'D'; // Marks between 40 and 49 (inclusive) receive a 'D'
        } else {
            grade = 'E'; // Marks less than 40 receive an 'E'
        }

        // Displaying the grade to the user
        console.log(`The grade for the marks ${marks} is: ${grade}`);
    } else {
        // If the input marks are not within the valid range, display an error message
        console.log("Invalid input. Please enter a number between 0 and 100.");
    }
}

// Calling the function to execute the grade generation process
generateStudentGrade();
