var notlar = []

var not1 = parseFloat (prompt("1. Notu Girin: "))
notlar.push(not1)

var not2 = parseFloat (prompt("2. Notu Girin: "))
notlar.push(not2)

var not3 = parseFloat (prompt("3. Notu Girin: "))
notlar.push(not3)

function ortalamaHesapla (dizi){
    var toplam = dizi[0] + dizi[1] + dizi[2] 
    return toplam / dizi.length
}

var ortalama = ortalamaHesapla(notlar)

function durumu(ortalama){
    if (ortalama>=60){
       return "Tebrikler Geçtiniz"
    }else
    return "Kaldınız"
}

var sonuc = durumu(ortalama);
alert("Ortalamanız: " + ortalama.toFixed(2) + "\n" + sonuc);