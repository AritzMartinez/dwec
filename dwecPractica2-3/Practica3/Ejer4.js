function alerta(){
    if (document.getElementById('test').checked==true){
        for (i=0;i<document.f1.elements.length;i++)
            if(document.f1.elements[i].type == "checkbox")
                document.f1.elements[i].checked=1
    } else {
        alert("none")
    }
}
