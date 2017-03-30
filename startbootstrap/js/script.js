var navn, kommentar; 

function svar() {
    
    navn = document.getElementById("navn").value;
    kommentar =document.getElementById("kommentar").value;
    
    document.getElementById("kommentarer").innerHTML =
    document.getElementById("kommentarer").innerHTML + "<strong>(" + navn + ") </strong>" +"<br>" + kommentar + "<br>"; 
}
document.getElementById("svar").addEventListener("click", svar);