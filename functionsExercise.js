//1.
function fozzieBear() {
    console.log("Wocka Wocka!");
}
fozzieBear();
//2.
function beaker(speak) {
    
    console.log(`${speak}`); 
    console.log(`${speak}`);
    console.log(`${speak}`);
    console.log(`${speak}`);
   // console.log(`${speak}`.repeat(4));
  // console.log(`${speak}`,`${speak}`,`${speak}`,`${speak}`);
}
beaker("Meep");


//3.
function muppetshow(a, b) {
if (a==="Muppet" && b==="Show") {
    return "It's time to play the music. It's time to light the lights.";
    
}
return '';
    
}
console.log(muppetshow("Muppet","Show"));
//4
function kermit() {
    return 'Kermit the Frog';
}
/*kermit();
 functin kermit (quote="Kermit the frog"){
     console.log(quote);
 }
 kermit();*/


 /*function kermiy() {
     return "Kermit the Frog"
     
 }
console.log(kermit()); */





//5
function muppetShowSeasons(seasons) {
   if (seasons===5) {
       return 'True';
       
   } 
   return 'false';
}
console.log(muppetShowSeasons(5));
//6
const manOrMuppet= function() {
    console.log("Am I a man or am I a muppet")};

manOrMuppet();

//7
rainbowConnection=()=> console.log("Someday we'll find it.The Rainbow Connection");
rainbowConnection();

//rainbowConnection=()=> "Someday we'll find it.The Rainbow Connection";
//console.log(rainbowConnection());

//8 False  
//9 True

//BONUS
//10 a. b.
const newMuppetmovies=["The muppets", "Muppets Most Wanted"]
const uppers= newMuppetmovies.map(function(x) {
    return x.toUpperCase();
    
});
console.log(uppers);
// or

/*const uppermovies=newMuppetmovies.map(movie==>movie.toUpperCase());
console.log(upperMovies);*/

//11a & b. 
const oldMuppetMovies=[ "The Muppet Movie", "The MUppets Take Manhattan", "The Great Muppet Caper","The Muppet Chrisstmas Carol","Muppet Treasure Island","MUppets from Space"]
const a= oldMuppetMovies.filter(twomovies => twomovies.length===22);
console.log(a);


// 12 a. b. c. d. 
const charactersOne=["statler",
"Waldorf"];
const charactersTwo=["The Swedish Chef",
"Animal",
"Rowlf"];
randomMuppet=(characters)=>{
    console.log(`${characters[Math.floor(Math.random()*characters.length)]}`);
}
randomMuppet(charactersOne);
randomMuppet(charactersTwo);

//13
/*caps=string=>{
    let chars=string.toLowerCase().split(``);
    for (i=0; i<chars.length; i+=2){
        chars[i]=chars[i].toUpperCase();
    }
    console.log(chars.join(``));
}
caps("Hello World")*/
//or 
caps=(string)=>{
    return string.split(``).map((v, i)=>i%2? v.toLowerCase():v.toUpperCase()).join(``);
}
console.log(caps("Hello World"));

//or
caps=(string)=>{
    let newString=``;
    for (i=0; i<string.length;i++){
        if (i%2===o){
            newString+= string(i).toUpperCase();
        } else{
            newString+=string(i).toLowerCase();
        }
    }
return newString;
}
console.log(`Hello,World`);

//Extra Bonus
caps = string => {
    let count = 0;
    let newString = ``;
    for(i=0; i < string.length; i++){
        if (string[i] === ` `){
            newString += ` `;
        }else if (count % 2 === 0){
            newString += string[i].toUpperCase();
            count++;
        }else{
            newString += string[i].toLowerCase();
            count++;
        }
    }
    return newString;
}

console.log(caps(`Hello World`))
