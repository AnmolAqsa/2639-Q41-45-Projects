/*
Q41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/

let magiciansName:string[] = ["Atif","Anmol","Arsalan","Ayaan","Arman"]
function show_magicians() {
    for (let a of magiciansName){
        console.log(a);
    }
}
show_magicians()