let user = document.getElementById("name").value;
let p1 = document.getElementById("p1").value;
let p2 = document.getElementById("p2").value;
let btn = document.getElementById("btn").value;


user.onkeyup = function ()
{
    if (user.length <3 || user.length >256)
    {
        document.getElementById("warningLogin").innerText = "Tài khoản từ 3 - 256 ký tự";
        btn.setAttribute("disabled", "disabled");
    }
    else if (p1.length <8 || p1.length >256)
    {
        {
            document.getElementById("warningLogin").innerText = "Mật khẩu từ 3 - 256 ký tự";
            btn.setAttribute("disabled", "disabled");
        }
    }
    else if(p2.localeCompare(p1)){
        document.getElementById("warningLogin").innerText = "Mật khẩu chưa khớp !!!";
        btn.setAttribute("disabled", "disabled");
    }
    else {
        document.getElementById("warningLogin").innerText = "";
        btn.removeAttribute("disabled");
    }
}