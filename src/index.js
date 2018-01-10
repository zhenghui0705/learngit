function setMath(){
    let sum = 0
    for(let i = 0;i < arguments.length; i++)
    sum += arguments[i]
    return sum
}
console.log(setMath(1,2,3));
