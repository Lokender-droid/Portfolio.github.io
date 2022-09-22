let contact = document.getElementById('contact');

contact.addEventListener('click', contact1);

function contact1(){
    window.location.href = "#contact-us";
}

let resume = document.getElementById('resume-new');
resume.addEventListener('click', viewResume);

function viewResume(){
    window.location.href = "Resume.pdf";
    
}