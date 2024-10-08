var kullanicilar = [
    {email : "aleyna@gmail.com", sifre : "12345"},
    {email : "sueda@gmail.com", sifre : "12345"}
]

var gonderiler = [
    {email: "aleyna@gamil.com", gonderi: "hava cok guzel"},
    {email: "aleyna@gamil.com", gonderi: "hava cok guzel 2"},
    {email: "sueda@gamil.com", gonderi: "hava cok guzel"}
]

var email = prompt("email giriniz:")
var sifre = prompt("sifre giriniz:")

function kullaniciVarmi(email,sifre){
    for(i=0;i<kullanicilar.length;i++){
        if(kullanicilar[i].email===email && kullanicilar[i].sifre===sifre){
            return true;

        }
        }
        return false;
}


function giris(){
    if(kullaniciVarmi(email,sifre)){
        console.log(gonderiler)
    }
    else{
    console.log("Giriş Hatalı!")
    }
}

giris(email,sifre)