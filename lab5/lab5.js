zadanie1=[] // ZADANIE 1 

for (let i=0;i<10;i++){
    var a = window.prompt("Podaj liczbę: ")
    zad1.push(a)
}
console.log(zad1)

zadanie2=[1,2,3,4,5,6] // ZADANIE 2

a=parseInt(prompt("Podaj liczbę: "))
b=parseInt(prompt("Podaj indeks: "))

var d = zad2.length+1

for(var i=b;i<d;i++){
    var c = zad2[i]
    zad2[i]=a
    a=c
}
console.log(zad2)

zadanie3=[1,2,3,4,5] // ZADANIE 3
zad3=[]

for(i=zad3.length;i>=0;i--){
    zad3.push(zadanie3[i])
}
console.log(zad_3)

numbers=[]
function zadanie4(a){ // ZADANIE 4
for (let i = 0; i < a; i++) { 
    numbers[i] = Math.round(Math.random()); 
}
return numbers
}

var b=zadanie4(10)
document.getElementById("Zadanie 4").innerHTML = b
var wynik = 0

zadanie5=[3,4,5,6] // ZADANIE 5
for(i=0;i<zadanie5.length;i++){
    wynik += zadanie5[i]
}
console.log(wynik)

for(i=0;i<zadanie5.length;i++){
    if(zadanie5[i]%2 == 0)
     console.log(zadanie5[i])
}

var wynik = []
zadanie5=[3,4,5,6]

for(i=0;i<zadanie5.length;i++){
    wynik.push(zadanie5[i] * 3);
}

console.log(wynik)
zadanie5=[12, 44, 9, 89, 8]
var i = 0

while (zadanie5[i] != 89){
    i++
}

console.log(i
)
var wynik = 0
zadanie5=[3,4,5,6]

for(i=0;i<zadanie5.length;i++){
    wynik += zadanie5[i]
}

console.log(wynik/zadanie5.length)
zadanie5=[10,4,6,68]
var max_num = 0

for(var i = 0; i < zadanie5.length; i++){
    if(max_num < zadanie5[i])
        max_num = zadanie5[i]
}

console.log(max_num)
function il_wyst(wart){
    var ilosc = 0
    zadanie5=[90,53,55,23,3,555,6676,45,55]

    for(var i = 0; i < zadanie5.length; i++){
        if(zadanie5[i] == wart){
            ilosc++
        }
    }
    return ilosc;
}

var wynik = il_wyst(55)
console.log(wynik)

var wynik = [0, 1]

for(var i = 2; i < 100; i++){ // ZADANIE 6
    wynik.push(wynik[i-2] + wynik[i-1])
}
console.log(wynik)

function suma(){  //ZADANIE 7
    var zadanie7 = [54,3,6,75,53,22,76,8,90,10]
    var max_num1 = 0
    var max_num2 = 0

    for(var i = 0; i < zadanie7
.length; i++){
        if(max_num1 < zadanie7
    
            [i]){
            max_num2 = max_num1
            max_num1 = zadanie7
    
            [i]
        }
        else{
            if(max_num2 < zadanie7
        
                [i]){
                max_num2 = zadanie7
        
                [i]
            }
        }
    }
    return max_num1 + max_num2
}
var wynik = suma()
console.log(wynik)

function zadanie8(){ // ZADANIE 8
    var zad = [1, 61,3 , 3, 4, 5, 20, 5, 7, 8, 9, 3, 9, 10]
    for (var i = 0; i < zad.length; i++){
        for(var a = i; a < zad.length;a++ ){
            if(zad[i] == zad[a+1]){
                zad.splice(a+1, 1)
            }
        }
    }
    return zad
}
var wynik = zadanie8()
console.log(wynik)