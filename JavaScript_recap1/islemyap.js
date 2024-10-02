var sayi1 = prompt("Birinci Sayı: ")
var sayi2 = prompt("İkinci Sayı: ")
var islem = prompt("Yapmak istediğiniz işlemi yazınız (bol, carp, topla, cikar): ")

function hesapla(sayi1,sayi2,islem){
    if(islem===bol){
        return sayi1/sayi2
    }
    else if(islem===carp){
        return sayi1*sayi2
    }
    else if(islem===topla){
        return sayi1+sayi2
    }
    else if(islem === cikar){
        return sayi1-sayi2
    }else
        return "Geçersiz İşlem"
}

var sonuc = hesapla(sayi1, sayi2, islem)
console.log(sonuc)