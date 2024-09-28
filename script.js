var na=5;
function comprobar(){
    var nu=document.getElementById("nose").value;
    if(na==nu){
        alert("ganaste");
    }else if(na>nu){
       alert("es mayor"); 
    }else{
        alert("es menor");
    }
}