
window.onload = function () {


    var button=document.getElementById("button1");
    button.onclick = function () {
        var inp1 = document.getElementById("input1").value;
        var inp2 = +document.getElementById("input2").value;
        var inp3 = +document.getElementById("input3").value;

        if (inp3 > inp2) {
            alert( "Масса тигелю без мармуру повинна бути менше або дорівнювати, масі тигеля з мармуром")

        }
        else if ((inp2-inp3) >= inp1) {
         alert( "Масса плівки до спалювання повинна бути більшою за массу мармурового залику")
        }
        else {
        var sum = ((inp2 - inp3) / inp1)*100;
            alert("Концентрація мармуру в плівці: " + sum + "%")
         }
    }
}