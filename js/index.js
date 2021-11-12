let actualValue = 0;
const element = document.querySelector("#currentValue");

const calculateMax = () => {
	const number1 = parseInt(document.getElementById("number1").value);
	const number2 = parseInt(document.getElementById("number2").value);
	return number1 + number2;
};

const increment = () => {
	const maxLimit = calculateMax();
	if (actualValue < maxLimit) {
		actualValue = actualValue + 1;
	}
	element.innerHTML = `<h1>${actualValue}</h1>`;
};

const decrement = () => {
	if (actualValue > 0) {
		actualValue = actualValue - 1;
	}
	element.innerHTML = `<h1>${actualValue}</h1>`;
};
