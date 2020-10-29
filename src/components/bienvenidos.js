let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
    () => alert("hello"):
    () => alert("bienvenidos");

welcome()
