document.addEventListener("DOMContentLoaded", function () {
    var displayScript = document.getElementById("scriptReturned");
    var scriptBtn = document.getElementById("scriptBtn");

    if (scriptBtn) {
        scriptBtn.addEventListener("click", generateScript);
    }

    function generateScript() {
        var name = document.getElementById("name").value;
        var location = document.getElementById("location").value;
        var person = document.getElementById("person").value;
        var date = document.getElementById("date").value;
        var description = document.getElementById("description").value;

        displayScript.innerHTML = `Hello, my name is ${name} and I want to report an incident from ${location}.
        I am reporting on behalf of ${person}. The incident happened on ${date}. 
        To describe the situation: ${description}. Please help spread awareness and hold people accountable.`;
    }
});