// Defining the function to detect the speed and calculate demerit points
function speedDetector() {
    // Prompting the user to enter the speed of the car
    let speed = prompt("Enter the speed of the car:");

    // Converting the input speed to a number
    speed = Number(speed);

    // Checking if the speed is less than the speed limit
    if (speed < 70) {
        console.log("Ok"); // Printing "Ok" if the speed is below the limit
    } else {
        // Calculating the number of demerit points
        let demeritPoints = Math.floor((speed - 70) / 5);

        // Checking if the demerit points exceed 12
        if (demeritPoints > 12) {
            console.log("License suspended"); // Printing "License suspended" if points are more than 12
        } else {
            console.log(`Points: ${demeritPoints}`); // Printing the total number of demerit points
        }
    }
}

// Calling the function to execute the speed detection process
speedDetector();
