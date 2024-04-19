// class Ksiązka{
//     constructor(tytuł, autor, rok_wydania) {
//        this.tytuł = tytuł;
//        this.autor = autor;
//        this.rok_wydania = rok_wydania;
//     }
//     informacja() {
//        return this.tytuł + " " + this.autor + " " + this.rok_wydania;
//     };
//  }



//  const book = {
//     title: "Metro23",
//     author: "Dmitrij Glukhovski",
//     year: 2006,
//  };
//  function dane(obj){
//     return  + obj.title + ' - ' + obj.author + ' ('+obj.year+')';
//  }
// console.log(book)
// console.log(dane(book))



// function book(ttl, auth, yr){
//     this.title = ttl;
//     this.author = auth;
//     this.year = yr;
// }
// const book1 = new book("Metro 2033", "Dmitrij Glukhovski", 2009)
// console.log(book1)



 const student = {
    imie: "Ostap",
    nazwisko: "Holoborodko",
    nrAlb: "w70479",
    oceny: {math: 4, eng: 3.5, fiz: 5}

 };
 function dane(obj){
    return  + obj.imie + ' ' + obj.nazwisko + ' ' + obj.nrAlb + ' ' + obj.oceny;
 }
console.log(student)
console.log(dane(student))