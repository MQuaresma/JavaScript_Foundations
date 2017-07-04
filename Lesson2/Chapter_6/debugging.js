function generateUserName(firstName, lastName) {
	var initial = firstName.charAt(0);
	initial = initial.toLowerCase();

	lastName = lastName.toLowerCase();

	var userName = initial + lastName;
	return userName;
}


document.addEventListener("click", function(event) {
	var userName = generateUserName("John", "Smith");
	alert(userName);
});