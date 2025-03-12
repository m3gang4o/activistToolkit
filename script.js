/* .js files add interaction to your website */
/*
KEY FEATURE: Personalize it
https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null
*/

var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
//Will need to explain that sometimes the DOM doesn't load all the way, so the browser can't find the element for JavaScript to use

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

/*
REFACTOR ITEM 2: 
Create a separate function for displaying the script.
Be sure to update function names.
*/

function generateScript() {
  //This variable must be in the function or it will not work
  var name = document.getElementById("name").value;
  var location = document.getElementById("location").value;
  var person = document.getElementById("person").value;
  var date = document.getElementById("date").value;
  var description = document.getElementById("description").value;
  

  displayScript.innerHTML = "Hello, my name is " + name + " and I want to report an incident from " + location + ". I am reporting on behalf of " + person + ". The incident happened on " + date + ". To describe the situation " + description + ". Please help me spread awareness on this incident and hold people accountable for their actions.";
}