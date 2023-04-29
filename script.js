// 🌟 APP: Tip Calculator

const billInput = document.getElementById("billTotalInput");
const tipInput = document.getElementById("tipInput");
const numberOfPeopleDiv = document.getElementById("numberOfPeople");
const perPersonTotalDiv = document.getElementById("perPersonTotal");

let numberOfPeople = Number(numberOfPeopleDiv.innerText);

// ** Calculate the total bill per person **
const calculateBill = () => {
	const bill = Number(billInput.value);
	const tipPercentage = Number(tipInput.value) / 100;

	const tipAmt = bill * tipPercentage;
	totalAmt = bill + tipAmt;
	const perPersonTotal = totalAmt / numberOfPeople;

	perPersonTotalDiv.innerText = `₹${perPersonTotal.toFixed(2)}`;
};

// ** Splits the bill between more people **
const increasePeople = () => {
	numberOfPeople++;
	numberOfPeopleDiv.innerText = numberOfPeople;
	calculateBill();
};

// ** Splits the bill between fewer people **
const decreasePeople = () => {
	if (numberOfPeople <= 1) {
		alert("Hey! You cannot be less than 1");
		return;
	}
	numberOfPeople--;
	numberOfPeopleDiv.innerText = numberOfPeople;
	calculateBill();
};
