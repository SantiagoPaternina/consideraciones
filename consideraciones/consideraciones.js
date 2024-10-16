//template string - form avanzada de unir texto y variable("")


// let nombre = "Rascael";
// let profesion = "psicoloco";
// let salario = 5000000;
// //NORMAL
// document.write(
//     "El empleado "+nombre+" se desempeña un salario de "+profesion+" y se gana un salario de "+salario+"<br>"
// );
// //template string 
// document.write(
//     `El empleado ${nombre} se desempeña ${profesion} y se gana un salario de ${salario} <br>`
// );



//utilizar arrayz y objetos 
// let peliculas = [
//     {
//         titulo:"spiderman",
//         genero:"accion, super heroes", 
//         sinopsis:"Araña",
//         duracion:"90 Minutos",
//         año: 2002, 
//         imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dEhbjgmjNQc_JAJJYvv4waAPpHilh4Ps8A&s" 
//     },
//     {
//         titulo:"deadpool",
//         genero:"ciencia ficcion", 
//         sinopsis:"super heroes",
//         duracion:"100 minutos",
//         año: 2010, 
//         imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Deadpool%2C_Georgia_Viaduct%2C_Vancouver%2C_April_6_2015_-_3.jpg/1200px-Deadpool%2C_Georgia_Viaduct%2C_Vancouver%2C_April_6_2015_-_3.jpg" 
//     },
//     {
//         titulo:"la llorona",
//         genero:"terror", 
//         sinopsis:"miedo",
//         duracion:"120 minutos",
//         año: 2000, 
//         imagen:"https://fotografias.larazon.es/clipping/cmsimages01/2019/08/09/612F9C35-48D0-4B55-AA11-4C66AF8B6DC7/98.jpg?crop=839,472,x0,y92&width=1900&height=1069&optimize=low&format=webply" 
//     }
// ];
// //mostrar en el navegador
// peliculas.forEach(function(peli, pos){
//     document.write(
//         `<div class="card" style="width: 18rem;">
//             <img src="${peli.imagen}" class="card-img-top" alt="...">
//         <div class="card-body">
//                 <h5 class="card-title">${peli.titulo}</h5>
//                 <p class="card-text">${peli.genero}</p>
//                 <p class="card-text">${peli.sinopsis}</p>
//                 <p class="card-text">${peli.duracion}</p>
//                 <p class="card-text">${peli.año}</p>
//                 <a href="#" class="btn btn-primary">Ver peliculas</a>
//             </div>
//         </div>`
//     )
// })



//scope o ambito de codigo
//viene junto con diferencias con let, var, const

//scope global
// document.write("Ambito global----------------<br>");
// let nombreLet = "JUAN"; 
// var nombreVar = "PEDRO"; 
// {//scope local
//     let nombreLet = "JUANITO"; 
//     var nombreVar = "PEDRITO";
//     document.write("Ambito local----------------<br>");
//     document.write("contenido let: "+nombreLet+"<br>");
//     document.write("contenido var: "+nombreVar+"<br>");
// }
// document.write("Ambito global----------------<br>");
// document.write("contenido let: "+nombreLet+"<br>");
// document.write("contenido var: "+nombreVar+"<br>");

//ejemplo 2
// document.write("Ambito global----------------<br>");
// let nombreLet = 10; 
// var nombreVar = 1; 
// const constante = 3.15;
// {//scope local
//     const constante = 4.15;
//     let nombreLet = 100; 
//     var nombreVar = 10;
//     var nombreVar = 100;
//     document.write("<h1>Ambito local----------------</h1>");
//     document.write("contenido let: "+nombreLet+"<br>");
//     document.write("contenido var: "+nombreVar+"<br>");
//     document.write("contenido const: "+constante+"<br>");
// }
// document.write("<h1>Ambito global----------------</h1>");
// document.write("contenido let: "+nombreLet+"<br>");
// document.write("contenido var: "+nombreVar+"<br>");
// document.write("contenido const: "+constante+"<br>");



//funcion normal 
// function saludar(nombre){
//     document.write("Hola "+nombre+"<br>");
// }
// saludar("Santiago");
// //funcion de flecha 
// let saludar2 = (nombre  )=>{
//     document.write("Hola "+nombre+"<br>");
// }
// saludar2("Yesica");

//funcion anonima normal
// (function(nombre){
//     document.write("Hola "+nombre+"<br>")
// })("JUAN");

// //funcion anonima de flecha 
// ((nombre)=>{
//     document.write("Hola "+nombre+"<br>");
// })("PEDRO");