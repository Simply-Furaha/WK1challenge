const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to detect speed and calculate demerit points
function speedDetector() {
    rl.question("Enter the speed of the car: ", function(speed) {
        speed = parseInt(speed);

        // Check if the input is a valid number
        if (isNaN(speed)) {
            console.log('Invalid input. Please enter a valid number.');
        } else {
            // Calculate demerit points based on speed exceeding the limit
            let demeritPoints = Math.floor((speed - 70) / 5);

            // Determine if license should be suspended
            if (demeritPoints > 12) {
                console.log(`Points: ${demeritPoints}. License suspended.`);
            } else {
                console.log(`Points: ${demeritPoints}.`);
            }
        }

        // Close the readline interface
        rl.close();
    });
}

// Calling the function to start the speed detection
speedDetector();
