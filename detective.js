
// PsuedoCode for Error Handling Exercise
// ======================================

// mysteryOperation function(): if successful - prints to console / if not successful, will throw an error

// Variables needed:

// 20 missions attended / const numOfMissions = 20;

// days of vacation earned variable = let daysEarned = 0;

// 13 days of vacation if operation is successful / const daysForSuccess = 13;
// 1 day of vacation for your motivation when operation is unsuccessful / const daysUnsuccessful = 1;
// 3 days of vacation for your attendance / const daysForAttendance = 3;

// Loop through 20 missions (numOfMissions):

// append daysEarned to try block (if successful);
// append daysEarned to catch block (if unsuccessful);
// append daysEarned to finally block (for attendance) / always runs regardless of outcome;

// console.log(daysEarned);

function mysteryOperation ()
{
	const outcome = Math.random(); // Generates a random number between 0 and 1.

	if (outcome < 0.5)
	{
		console.log("The operation is completed successfully!");
	}
	else
	{
		throw new Error("The operation is failed mysteriously!");
	}
}

const numOfMissions = 20;

const daysForSuccess = 13;
const daysUnsuccessful = 1;
const daysForAttendance = 3;

let daysEarned = 0;

for (let i = 0; i < numOfMissions; i++) {

	try {
		mysteryOperation();
		daysEarned += daysForSuccess;
	}
	catch {
		daysEarned += daysUnsuccessful;		
	}
	finally {
		daysEarned += daysForAttendance;
	}
};

console.log(daysEarned);
