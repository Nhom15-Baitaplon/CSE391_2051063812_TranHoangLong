var data =[];
var x = 1000000;
var y = 5000000;
var z = 10000000;
function add(){
    var Sothutu = document.getElementById("stt").value    
    var hovaten = document.getElementById("hovaten").value
    var sdt = document.getElementById("sdt").value
    var email = document.getElementById("eml").value
    var TienHang = document.getElementById("tienhang").value
    var MaHang = document.getElementById("mahang").value
    var Cannang= document.getElementById("cannang").value
    var Tongtien = document.getElementById("tongtien").value

   Tongtien = Cannang * x;

    var item = {
        TD : Sothutu,
        HVT : hovaten,
        SDT : sdt,
        EML : email,
        MH :MaHang,
        TH : TienHang,  
        CN : Cannang,
        TT : Tongtien
        
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
    <th scope="col">Mã Hàng</th>
    <th scope="col">Tiền Hàng</th>
    <th scope="col">Cân Nặng</th>
    <th scope="col">Tổng tiền</th>
  </tr>`
  for(let i=0; i<data.length;i++){
    table += `<tr>
    
    <td>${data[i].TD}</td>
    <td>${data[i].HVT}</td>
    <td>${data[i].SDT}</td>
    <td>${data[i].EML}</td>
    <td>${data[i].TH}</td>
    <td>${data[i].MH}</td>
    <td>${data[i].CN}</td>
    <td>${data[i].TT}</td>
    
  </tr>`

  }
  document.getElementById("show").innerHTML = table
}