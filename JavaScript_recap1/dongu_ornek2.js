var gelirler = [];
var giderler = [];

function menuGoster() {
  var devam = true;

  while (devam) {
    var secim = prompt(
      "Bütçe Takibi Uygulaması\n\n" +
        "1.Gelir Ekle\n" +
        "2.Gider Ekle\n" +
        "3.Bütçeyi Görüntüle\n" +
        "4.Çıkış\n" +
        "Yapmak İstediğiniz İşlemi Seçiniz(1-4):"
    );
    if (secim === "1") {
      gelirEkle();
    } else if (secim === "2") {
      giderEkle();
    } else if (secim === "3") {
      butceGor();
    } else if (secim === "4") {
      devam = false;
      alert("Uygulamadan Çıkılıyor.");
    } else {
      alert("Yanlış Seçin 1-4 arasında Sayı Giriniz.");
    }
  }
}
//gelir ek
function gelirEkle(){
    var miktar = parseFloat(prompt("Eklemek İstediğiniz Gelir Miktarını Giriniz:"));
    if (miktar>0){
        gelirler.push(miktar);
        alert(miktar + "TL Eklendi.")
    }else{
        alert("Geçersiz Miktar Girişi")
    }
}

//bütçe görüntüle

function giderEkle() {
    var miktar = parseFloat(prompt("Eklemek istediğiniz miktarı girin:"))
    if (miktar>0) {
        giderler.push(miktar);
        alert(miktar + "TL Eklendi.")
    }else{
        alert("Geçersiz Miktar Gridiniz.")
    }
}

function butceGor() {
    var toplamGelir = 0;
    for(var i =0; i< gelirler.length;i++){
        toplamGelir+=gelirler[i]
    }

    var toplamGider = 0;
    for (var i=0; i<giderler.length; i++){
        toplamGider+=giderler[i]
    }

    var netButce = toplamGelir - toplamGider

    var durum = ""
    if (netButce >0 ){
        durum = "Kar";
    }else if (netButce<0) {
        durum = "Zarar"
    }else{
        durum= "Eşit"
    }

    var butce =
    "Toplam Gelir: " + toplamGelir.toFixed(2) + " TL\n" +
        "Toplam Gider: " + toplamGider.toFixed(2) + " TL\n" +
        "Net Bütçe: " + netButce.toFixed(2) + " TL\n" +
        "Durum: " + durum;

    alert(butce);
}
menuGoster()