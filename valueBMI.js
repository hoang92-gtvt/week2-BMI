let trongLuong;
let chieuCao;
let bMi;
function tinhtoan() {
    alert('xinchao');
    trongLuong=parseFloat(document.getElementById("trong_luong").value);
    chieuCao=parseFloat(document.getElementById("chieu_cao").value);
    bMi=trongLuong/(chieuCao^2);
    console.log (trongLuong);
    console.log (chieuCao);
    console.log (bMi);
    if (bMi<18.5){
        document.getElementById("ghichu").value = 'Giá trị BMI của bạn là ' + bMi + " Bạn Underweight";
    }else {
        if (18.5 <= bMi < 18.5) {
            document.getElementById("ghichu").value = 'Giá trị BMI của bạn là ' + bMi + " Bạn Nomarl";
        }else{
            if (25 <= bMi < 30) {
                document.getElementById("ghichu").value = 'Giá trị BMI của bạn là ' + bMi + " Bạn Overweight";
            }
            document.getElementById("ghichu").value = 'Giá trị BMI của bạn là ' + bMi + " Bạn Obese";
        }
    }
}