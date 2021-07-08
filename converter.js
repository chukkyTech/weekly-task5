//meter conversion
const meter = document.getElementById("meter");

meter.addEventListener("input", Convert);
 
function Convert(x) {
    let meter = x.target.value;
    
    document.getElementById("inches").value = meter * 39.37;
    document.getElementById("foot").value = meter * 3.381;
    document.getElementById("yard").value = meter * 1.09361;
    }

    //inches conversion
    const inches = document.getElementById("inches");

inches.addEventListener("input", Convert);
 
function Convert(x) {
    let inches = x.target.value;
    
    document.getElementById("meter").value = inches / 39.37;
    document.getElementById("foot").value = inches * 0.08333;
    document.getElementById("yard").value = inches / 36;
    }

    //feet conversion
    const foot = document.getElementById("foot");

foot.addEventListener("input", Convert);
 
function Convert(x) {
    let foot = x.target.value;
    
    document.getElementById("inches").value = foot * 12;
    document.getElementById("meter").value = foot * 3.2808;
    document.getElementById("yard").value = foot / 3;
    }

    //yard conversion
    const yard = document.getElementById("yard");

yard.addEventListener("input", Convert);
 
function Convert(x) {
    let yard = x.target.value;
    
    document.getElementById("inches").value = yard * 36;
    document.getElementById("foot").value = yard * 3;
    document.getElementById("meter").value = yard / 1.09361;
    }

     const resetBtn = document.getElementById('#reset');

     resetBtn.addEventListener('click', function() {
         input = 0;
         document.getElementById(input).innerHTML = 0;
     })