function formatName(firstName, lastName){
	
	let str1 = firstName;
	let str2 = lastName;

	let result = str1.concat(" ",str2);

	return result;
}

function getGreeting(timeOfDay){
	if(timeOfDay==="morning"){
		return "Good morning";
	}
	else if(timeOfDay==="afternoon"){
		return "Good afternoon";
	}
	else if(timeOfDay==="evening"){
		return "Good evening";
	}
}


function createGreeting(firstName, lastName, timeOfDay){

	let fullName = formatName(firstName, lastName);
	let greeting = getGreeting(timeOfDay);

	let result = greeting.concat(", ",fullName);

	return result;

}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));
