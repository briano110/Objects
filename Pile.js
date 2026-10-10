function Pile(presents){
let pile=2
let heavy = Math.max(...presents)
let light = Math.min(...presents)
presents.remove(light)
sum = light
while (sum < heavy){
let x =Math.min(...presents)
if (x<sum && sum + x< heavy){
    pile++ 
    presents.remove(x)
    sum = sum + x
}
}
return pile
}
console.return(Pile([10,8,7,5,5,2]))