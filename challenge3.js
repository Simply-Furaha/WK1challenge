// Function to calculate net salary
function calculateNetSalary() {
    // Prompting user for input
    let basicSalary = Number(prompt("Enter the basic salary:"));
    let benefits = Number(prompt("Enter the benefits:"));

    // Calculating gross salary
    let grossSalary = basicSalary + benefits;

    // Calculating PAYE
    let paye;
    if (grossSalary <= 24000) {
        paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
        paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
        paye = 4800 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
        paye = 138000 + (grossSalary - 500000) * 0.325;
    } else {
        paye = 235000 + (grossSalary - 800000) * 0.35;
    }

    // Applying personal relief
    let personalRelief = 2400;
    paye = Math.max(paye - personalRelief, 0);

    // Calculating NHIF deduction
    let nhif;
    if (grossSalary <= 5999) {
        nhif = 150;
    } else if (grossSalary <= 7999) {
        nhif = 300;
    } else if (grossSalary <= 11999) {
        nhif = 400;
    } else if (grossSalary <= 14999) {
        nhif = 500;
    } else if (grossSalary <= 19999) {
        nhif = 600;
    } else if (grossSalary <= 24999) {
        nhif = 750;
    } else if (grossSalary <= 29999) {
        nhif = 850;
    } else if (grossSalary <= 34999) {
        nhif = 900;
    } else if (grossSalary <= 39999) {
        nhif = 950;
    } else if (grossSalary <= 44999) {
        nhif = 1000;
    } else if (grossSalary <= 49999) {
        nhif = 1100;
    } else if (grossSalary <= 59999) {
        nhif = 1200;
    } else if (grossSalary <= 69999) {
        nhif = 1300;
    } else if (grossSalary <= 79999) {
        nhif = 1400;
    } else if (grossSalary <= 89999) {
        nhif = 1500;
    } else if (grossSalary <= 99999) {
        nhif = 1600;
    } else {
        nhif = 1700;
    }

    // Calculating NSSF deduction (assuming Tier I and Tier II combined)
    let nssfTierI = Math.min(grossSalary, 7000) * 0.06;
    let nssfTierII = Math.max(grossSalary - 7000, 0) * 0.06;
    let nssf = nssfTierI + nssfTierII;

    // Calculating housing levy
    let housingLevy = grossSalary * 0.015;

    // Calculating net salary
    let netSalary = grossSalary - (paye + nhif + nssf + housingLevy);

    // Printing the results
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`PAYE (Tax): ${paye}`);
    console.log(`NHIF Deduction: ${nhif}`);
    console.log(`NSSF Deduction: ${nssf}`);
    console.log(`Housing Levy: ${housingLevy}`);
    console.log(`Net Salary: ${netSalary}`);
}

// Calling the function to execute the salary calculation
calculateNetSalary();
