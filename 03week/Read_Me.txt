Towers of Hanoi
Code Plan/Read Me

This project is a terminal application of the game Towers of Hanoi.  Rules for the game can be found here: https://en.wikipedia.org/wiki/Tower_of_Hanoi 

For this project code was written to allow the game to function.  

Step 1 – Move a piece:
	This was done using a function containing if statements and the pop() and push() methods.
	ex. 
	If (startStack === 'a' && endStack ==='b') {
		let start = stack['a'].pop()  ---this takes the last element out of the startStack
		stack['b'].push(start)  --this takes the removed element and places it in the endStack

Step 2 – Check for legal or illegal move:
	This was done for each stack after each move.  Using a for loop iterate through the arrays and determine if the last item is less than or greater than the item before it.  If it is greater than the item before it return that item to its original array(stack) and log (invalid move) notification.
	If (startStack === 'a' && endStack ==='b') {
	for (let i=0; i<stack['b'].length; i++) { --this iterates through the array
		if (stack.b[i] < stack.b[i+1]) {--this compares the items in the array with the items following
			let error = stack['b'].pop() ---this takes the last element out of the endStack
			stack['a'].push(error)}}} this takes the removed element and places it in the startStack

Step 3 – Check for winner:
	This was done using an if statement that compares the length of the array and the values of the items inside the array to set parameters.
	If (array.length = 4 && array[0]>array[1]>array[2]...etc) {
		console.log(winner notification)}

	Reset the board by returning the arrays to their initial values if a winner detected.
