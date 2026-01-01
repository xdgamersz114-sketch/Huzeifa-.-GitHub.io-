function checkLogin(){
    var u = document.getElementById("user").value;
    var p = document.getElementById("pass").value;

    if(u=="admin" && p=="123"){
        // alert hata diya
        window.location.href = "products.html";
    }else{
        document.getElementById("msg").innerHTML = "Wrong details";
    }
}

