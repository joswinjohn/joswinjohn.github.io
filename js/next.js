var s2 = 0;

function next() {
    if (s2 == 0) {
        document.getElementById("qh1").innerHTML = "Step 2";
        document.getElementById("p1").innerHTML = "1. Open \"Google WiFi\" and go the \"Port Management\" section.";
        document.getElementById("p2").innerHTML = "2. Add a new port rule, and type in 85. then create another port rule, and type in 37777";

        s2 = 1;
    }
}