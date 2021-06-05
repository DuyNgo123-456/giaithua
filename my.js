let n=+prompt("Hãy nhập số tự nhiên");
let gt=1;
if (n<0){
    alert("Bạn hãy nhập số tự nhiên lớn hơn 0");
}else{
    for (i=1;i<=n;i++){
        gt=gt*i;
    }
    alert("Vậy n!=" + gt)
}