//Đăng Nhập Admin
var admin ='admin123';
var mk_admin ="123";

function login(e){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if(username == admin && password == mk_admin){
        alert('Đăng nhập thành công');
        window.location.href ="./Admin.html";  
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



/*Gửi thông tin 

var data =[];

function add(){
    var tieude = document.getElementById("tieude").value    
    var hovaten = document.getElementById("hovaten").value
    var sdt = document.getElementById("sđt").value
    var email = document.getElementById("email").value
    var noidung = document.getElementById("noidung").value

    var item = {
        TD : tieude,
        HVT : hovaten,
        SDT : sdt,
        EML : email,
        ND : noidung
    }
    
    data.push(item)
    show()

}


function show(){
    table = `<tr>
    <th scope="col">STT</th>
    <th scope="col">Họ và tên</th>
    <th scope="col">Số điện thoại</th>
    <th scope="col">Email</th>
    <th scope="col">Tiêu Đề</th>
    <th scope="col">Nội Dung</th>
  </tr>`
  for(let i=0; i<data.length;i++){
    table += `<tr>
    <th scope="row">i</th>
    <td>${data[i].TD}</td>
    <td>${data[i].HVT}</td>
    <td>${data[i].SDT}</td>
    <td>${data[i].EML}</td>
    <td>${data[i].ND}</td>
    
  </tr>`

  }
  document.getElementById("show").innerHTML = table
*/
