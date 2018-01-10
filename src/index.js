function setMath(){
    let sum = 0
    for(let i = 0;i < arguments.length; i++)
    sum += arguments[i]
    return sum
}
console.log(setMath(1,2,3));



function setColor(){
    var color = 0
    for(var j = 0;j < arguments.length; j++)
    color += arguments[j]
    return color
}
alert(setColor(1,2,3))
