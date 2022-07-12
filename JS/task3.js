function myFunction() {
    var checkBox = document.getElementById("styled-checkbox-1");
    var text = document.getElementById("main");
    var text = document.getElementById("main");
    var sub1 = document.getElementById("sub1");
    var sub2 = document.getElementById("sub2");
    var sub3 = document.getElementById("sub3");
    var sub4 = document.getElementById("sub4");
    var sub5 = document.getElementById("sub5");
    var sub6 = document.getElementById("sub6");
    var sub7 = document.getElementById("sub7");
    if (checkBox.checked == true) {
        text.style.display = "inline-block";
        sub1.style.display = "none";
        sub2.style.display = "none";
        sub3.style.display = "none";
        sub4.style.display = "none";
        sub5.style.display = "none";
        sub6.style.display = "none";
        sub7.style.display = "none";
    } else {
        text.style.display = "none";
        sub1.style.display = "inline-block";
        sub2.style.display = "inline-block";
        sub3.style.display = "inline-block";
        sub4.style.display = "inline-block";
        sub5.style.display = "inline-block";
        sub6.style.display = "inline-block";
        sub7.style.display = "inline-block";

    }
      
    
}
function mySubFunction() {
    var checkBox = document.getElementById("styled-checkbox-4");
    var txt = document.getElementById("main");
    var sub1 = document.getElementById("sub1");
    var sub2 = document.getElementById("sub2");
    var sub3 = document.getElementById("sub3");
    var sub4 = document.getElementById("sub4");
    var sub5 = document.getElementById("sub5");
    var sub6 = document.getElementById("sub6");
    var sub7 = document.getElementById("sub7");
    if (checkBox.checked == true) {
        sub1.style.display = "inline-block";
        sub2.style.display = "inline-block";
        sub3.style.display = "inline-block";
        sub4.style.display = "inline-block";
        sub5.style.display = "inline-block";
        sub6.style.display = "inline-block";
        sub7.style.display = "inline-block";
        txt.style.display = "none";

    } else {
        sub1.style.display = "none";
        sub2.style.display = "none";
        sub3.style.display = "none";
        sub4.style.display = "none";
        sub5.style.display = "none";
        sub6.style.display = "none";
        sub7.style.display = "none";
        txt.style.display = "inline-block";

    }
}     