//get refrences to the form and display area
const form =  document.getElementById(`resume maker`) as HTMLFormElement
const resumedisplayelement = document.getElementById(`resume display`) as HTMLFormElement

//handle form submission
form.addEventListener(`submit`, (event:Event) =>{
    event.preventDefault();//prevent page reload
    
    //collect input values
    const name =(document.getElementById(`name`) as HTMLFormElement).value
    const email =(document.getElementById(`e-mail`) as HTMLFormElement).value
    const phone =(document.getElementById(`phone`) as HTMLFormElement).value
    const Education =(document.getElementById(`education`) as HTMLFormElement).value
    const Experience =(document.getElementById(`experience`) as HTMLFormElement).value
    const Skills =(document.getElementById(`skills`) as HTMLFormElement).value

//generate the resume content dynamically
const resumeHTML =`
<h2><b> Editable Resume</b></h2>
<h3>Personal Information</h3>
<p><b>Name</b><span contenteditable ="true">${name}</span></p>
<p><b>Name</b><span contenteditable ="true">${email}</span></p>
<p><b>Name</b><span contenteditable="true">${phone}</span></p>

<h3>Education</h3>
<p contenteditable ="true">${Education}</p>

<h3>Experience</h3>
<p contenteditable ="true> ${Experience}</p>

<h3>Skills<h3>
<p contenteditsable ="true">${Skills}</p>
`;

//display the generated resume
if(resumedisplayelement){
    resumedisplayelement.innerHTML= resumeHTML;
}else{
    console.error(`The resume display element is missing.`);
}
});