function setSum() {
	var sum = 0;
	for (var i = 0; i < arguments.length; i++)
		sum += arguments[i]
	return sum
};
console.log(setSum(10,20,30));

function setColor() {
	var color = 0
	for (var j = 0; j < arguments.length; j++)
		color += arguments[j]
	return color
}

var sum = setColor(1,2,3)
