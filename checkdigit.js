//get eight digit number
do{
account = window.prompt("Enter an eight digit number.", "");
} while (account.length != 8);
digits = new Array(8);
weights = new Array(8);
totalweight = 0
for (i=1; i<=8; i++){
	digits[i] = account.substring(i-1,i);
	weights[i] = digits[i]*(10-i);
	totalweight = totalweight + weights[i];
	}
for (i=1; i<=8; i++){
	document.write(digits[i] +" weight: " + weights[i] + "<br>");
}
document.write(totalweight);

//adding comment

