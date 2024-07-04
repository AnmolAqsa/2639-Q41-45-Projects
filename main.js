/*
Q41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.
*/
var magiciansName = ["Atif", "Anmol", "Arsalan", "Ayaan", "Arman"];
function show_magicians() {
    for (var _i = 0, magiciansName_1 = magiciansName; _i < magiciansName_1.length; _i++) {
        var a = magiciansName_1[_i];
        console.log(a);
    }
}
show_magicians();
