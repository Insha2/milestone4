//get refrences to the form and display area
var form = document.getElementById("resume maker");
var resumedisplayelement = document.getElementById("resume display");
//handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); //prevent page reload
    //collect input values
    var name = document.getElementById("name").value;
    var email = document.getElementById("e-mail").value;
    var phone = document.getElementById("phone").value;
    var Education = document.getElementById("education").value;
    var Experience = document.getElementById("experience").value;
    var Skills = document.getElementById("skills").value;
    //generate the resume content dynamically
    var resumeHTML = "\n<h2><b>Resume</b></h2>\n<h3>Personal Information</h3>\n<p><b>Name</b>".concat(name, "</p>\n<p><b>Name</b>").concat(email, "</p>\n<p><b>Name</b>").concat(phone, "</p>\n\n<h3>Education</h3>\n<p>").concat(Education, "</p>\n\n<h3>Experience</h3>\n<p>").concat(Experience, "</p>\n\n<h3>Skills<h3>\n<p>").concat(Skills, "</p>\n");
    //display the generated resume
    if (resumedisplayelement) {
        resumedisplayelement.innerHTML = resumeHTML;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
