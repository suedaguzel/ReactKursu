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

function giris(){
    if((email == kullanicilar[0].email && sifre==kullanicilar[0].sifre )||
    (email == kullanicilar[1].email && sifre==kullanicilar[1].sifre )){
        console.log(gonderiler)
    }
    else{
    console.log("Giriş Hatalı!")
    }
}

giris(email,sifre)