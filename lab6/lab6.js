class Ksiązka{
    constructor(tytuł, autor, rok_wydania) {
       this.tytuł = tytuł;
       this.autor = autor;
       this.rok_wydania = rok_wydania;
    }
    informacja() {
       return this.tytuł + " " + this.autor + " " + this.rok_wydania;
    };
 }



 const book = {
    title: "Metro23",
    author: "Dmitrij Glukhovski",
    year: 2006,
 };
 function dane(obj){
    return  + obj.title + ' - ' + obj.author + ' ('+obj.year+')';
 }
console.log(book)
console.log(dane(book))



function book(ttl, auth, yr){
    this.title = ttl;
    this.author = auth;
    this.year = yr;
}
const book1 = new book("Metro 2033", "Dmitrij Glukhovski", 2009)
console.log(book1)



const student = {
   imie: "Ostap",
   nazwisko: "Holoborodko",
   nrAlb: "w70479",
   oceny:[3,3,5]
   }
function dane(obj){
    return obj.name+"  "+obj.number+" math:"+obj.grades[0]+" eng:"+obj.grades[1]+" fw:"+obj.grades[2]+" Srednia: "+(obj.grades[0]+obj.grades[1]+obj.grades[2])/3
}
console.log(student)
console.log(dane(student))



class trójkąt{
   constructor(height, width, name) {
       this.height = height;
       this.width = width;
       this.name = name;
   }
}
const triangle1=new trójkąt(7,9,"ABC")
const triangle2=new trójkąt(3,6,"ABC")
const triangle3=new trójkąt(12,14,"ABC")

function poletr(obj){
   return (obj.height*obj.width)/2
}

console.log(poletr(triangle1))
console.log(poletr(triangle2))
console.log(poletr(triangle3))

function porown(tr1,tr2){

   if(poletr(tr1)>poletr(tr2)){
       console.log("Triangle1 jest wiekszy: "+tr1)
   }
   else{
       console.log("Triangle2 jest wiekszy: "+tr2)   
   }
}

porown(poletr(triangle1),poletr(triangle2))

class trap{
   constructor(height, base1, base2, name) {
       this.height = height;
       this.base1 = base1;
       this.base2 = base2;
       this.name = name;
   }
}
const trap1=new trap(5,9,10,"ABCD")
const trap2=new trap(6,10,8,"ABCD")
const trap3=new trap(5,7,7,"ABCD")

function pole(obj){
   return (obj.height*(obj.base1+obj.base2))/2
}

console.log(pole(trap1))
console.log(pole(trap2))
console.log(pole(trap3))

