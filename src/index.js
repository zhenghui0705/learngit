function setSum (){
    var sum = 0;
    for(var i = 0;i < arguments.length; i++)
    sum += arguments[i]
    return sum
};

console.log(setSum(10,22,33));
