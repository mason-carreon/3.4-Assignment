{
  var x = myFunction(72, 50); // This is my first function
  document.getElementById("F1").innerHTML = x;
  
  function myFunction(a, b) {
    return a - b;
  }
};

{
  var y = myFunction(6, 7); // This is my second function
  document.getElementById("F2").innerHTML = y;
  
  function myFunction(c, d) {
    return c * d;
  }
};

    const person = { //This is my object
        firstName: "Mason",
        lastName : "Carreon",
        age: "19",
        fullDetails : function() {
          return this.firstName + " " + this.lastName + " is " + this.age;
        }
      };
      document.getElementById("person").innerHTML = person.fullDetails();

      function displayDate() { // This is my event
        document.getElementById("date").innerHTML = Date();
      }

      let str = "This part of the message is hidden. You can see this part of the message because it didnt get sliced. This part of the message is also hidden "; // This is my method
document.getElementById("method").innerHTML = str.slice(35,101); 