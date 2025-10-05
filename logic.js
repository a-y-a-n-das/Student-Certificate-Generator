console.log("External script is working!");


document.addEventListener('DOMContentLoaded', function(){
const form = document.getElementById('cert-form');

form.addEventListener('submit', function(event){
    event.preventDefault();
    const checkbox = document.getElementById('TnC');
    if(!checkbox.checked){
        alert("Please tick the checkbox for proceeding further!");
        event.preventDefault();
        return;
}

const fname= document.getElementById("fname").value;
const lname= document.getElementById("lname").value;
const course= document.getElementById("course").value;
const year = document.getElementsByName("year");
const pdf= document.getElementById('pdf');
const clear = document.getElementById('clear');

let selectedYear = '';
    for (let i = 0; i < year.length; i++) {
      if (year[i].checked) {
        selectedYear = year[i].value;
        break;
      }
    }


document.getElementById("cert-name").textContent= `${fname} ${lname}`;
document.getElementById("cert-course").textContent= `${course}`;
document.getElementById("cert-year").textContent= `${selectedYear}`;

document.getElementById("certificate").style.display= 'block';
document.getElementById('pdf').style.display='block';




console.log(`${fname} ${lname} ${course}`); 
});
clear.addEventListener('click', ()=>{
  form.reset();
  form.querySelector('input').focus();
})
pdf.addEventListener('click', ()=>{
  html2pdf().from(certificate).save("certificate.pdf")
});

});