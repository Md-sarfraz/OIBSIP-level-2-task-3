function convert()
{
    var farenheit="";
    var celsius="";
    var kelvin="";
    var degree=document.getElementById("degree").value;
    if(document.getElementById("option").value=="Farenheit"){
        celsius=eval("(degree-32)*(5/9)");
        document.getElementById("Results").innerHTML=celsius+" Celsius";
    }
    else if(document.getElementById("option").value=="Celcius"){
        document.getElementById("Results").innerHTML=degree+" Celsius";
    }
    else{
        var num =273.15;
        kelvin=eval(degree+"+"+num);
        document.getElementById("Results").innerHTML=kelvin+" Celsius";
    }
}