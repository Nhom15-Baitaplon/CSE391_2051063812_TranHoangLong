var admin ='admin123';
var mk_admin ="123";

function login(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == admin && password == mk_admin){
        alert('Đăng nhập thành công');
        window.location.href ="Quydinhhangkygui.html";  
    }
    else if(username == "" || username != admin)
    {
        alert('Bạn nhập sai tài khoản');
    }
    else if(password == "" || password != mk_admin){
        alert('Bạn nhập sai mật khẩu');

    }
    else{
        alert('Đăng nhập thất bai.');
    }
}

