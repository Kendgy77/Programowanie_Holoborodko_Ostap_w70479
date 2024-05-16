let a = 10
let b = 20
let c = 23.2
console.log(a+b+c)

document.getElementById("Dodawanie").innerHTML=a+b+c
console.log(typeof a ==="number")
{
    console.log("Zmienna to liczba")
}

if((a+b>c)&&(a+c>b)&&(b+c>a))
{
console.log("Jest trójkąt")
}

let p = (a+b+c)/2
let S=(p*(p-a)*(p-b)*(p-c))

if((typeof a !== "number")||(typeof b !== "number")||(typeof c !== "number")){
    console.log("Nie poprawne dane")
}else{
    if((a+b<=c)||(a+c<=b)||(b+c<=a)){
        console.log("Nie jest trójkąt")
    }else{
        let S=(p*(p-a)*(p-b)*(p-c))

console.log("Pole trójkąta: " + S)   
    }
}

document.getElementById("Pole").innerHTML=S
let sign = prompt("Jak masz na imię?");
alert("Cześć, "+sign+"!")

let num1=Number(prompt("Podaj pierwszą liczbę"));
let num2=Number(prompt("Podaj drugą liczbę"));
let suma=num1+num2;
document.getElementById("Suma").innerHTML=suma

let num3=parseFloat(Number(prompt("Podaj pierwszą liczbę")));
let num4=parseFloat(Number(prompt("Podaj drugą liczbę")));
let num5=parseFloat(Number(prompt("Podaj trzecią liczbę")));

let N_liczba=0;
if(num3>num4){
    if(num3>num5){
        console.log("Najwieksza liczba: "+num3)
        N_liczba=num3
    }
    else{
        console.log("Najwieksza liczba: "+num5)
        N_liczba=num5
    }
}
else{
    if(num4>num5)
    {
        console.log("Najwieksza liczba: "+num4)
        N_liczba=num4
    }
    else{
        console.log("Najwieksza liczba: "+num5)
        N_liczba=num5
    }
}
document.getElementById("Najwieksza").innerHTML=N_liczba
