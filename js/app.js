function change1(){
  var opt = {
    quality:1.5,
    width: 1080,
    height: 1075,
  }
  var node = document.getElementById('view');
domtoimage.toBlob(document.getElementById('view'),opt)
.then(function (blob) {
  window.saveAs(blob, 'PERINGATAN DINI '+today.format('D MMMM YYYY')+'.png');
}); 
}
//FUNCTION UNTUK DOWNLOAD HASIL GAMBAR

//FUNCTION UNTUK MEMILIH PERINGATAN DI FORM
  function change(nama,selector){
    var image = document.getElementsByName(nama)[0];
    image.src = selector.value;
    switch(selector.value){
      // Antang Kalang
      case selector.value = "asset/img/printmap/antangkalang1.png":
        selector.style.backgroundColor = '#fe9603';
        break;
      case selector.value = "asset/img/printmap/antangkalang2.png":
        selector.style.backgroundColor = '#effb1b';
        break;
      case selector.value = "asset/img/printmap/antangkalang.png":
        selector.style.backgroundColor = '#6cfd3e';
        break;
        // hanaut
        case selector.value = "asset/img/printmap/pulauhanaut1.png":
          selector.style.backgroundColor = '#fe9603';
          break;
        case selector.value = "asset/img/printmap/pulauhanaut2.png":
          selector.style.backgroundColor = '#effb1b';
          break;
        case selector.value = "asset/img/printmap/pulauhanaut.png":
          selector.style.backgroundColor = '#6cfd3e';
          break;
          // Baamang
          case selector.value = "asset/img/printmap/baamang1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/baamang2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/baamang.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             // Seranau
          case selector.value = "asset/img/printmap/seranau1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/seranau2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/seranau.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             // Bukit Santuai
          case selector.value = "asset/img/printmap/bukitsantuai1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/bukitsantuai2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/bukitsantuai.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             // Telaga Antang
          case selector.value = "asset/img/printmap/telagaantang1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/telagaantang2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/telagaantang.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
                // Cempaga
          case selector.value = "asset/img/printmap/cempaga1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/cempaga2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/cempaga.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
            // Telawang
          case selector.value = "asset/img/printmap/telawang1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/telawang2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/telawang.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             // Cempaga Hulu
          case selector.value = "asset/img/printmap/cempagahulu1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/cempagahulu2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/cempagahulu.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             //  Teluk Sampit
          case selector.value = "asset/img/printmap/teluksampit1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/teluksampit2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/teluksampit.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
               //  Kota Besi
          case selector.value = "asset/img/printmap/kotabesi1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/kotabesi2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/kotabesi.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
                //  Tualan Hulu
          case selector.value = "asset/img/printmap/tualanhulu1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/tualanhulu2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/tualanhulu.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             //  Mentawa Baru Ketapang
          case selector.value = "asset/img/printmap/mentawabaruketapang1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/mentawabaruketapang2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/mentawabaruketapang.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             //  Mentaya Hilir Selatan
          case selector.value = "asset/img/printmap/mentayahilirselatan1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/mentayahilirselatan2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/mentayahilirselatan.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
            //  Mentaya Hilir Utara
          case selector.value = "asset/img/printmap/mentayahilirutara1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/mentayahilirutara2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/mentayahilirutara.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
            //  Mentaya Hulu
          case selector.value = "asset/img/printmap/mentayahulu1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/mentayahulu2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/mentayahulu.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
             //  Parenggean
          case selector.value = "asset/img/printmap/parenggean1.png":
            selector.style.backgroundColor = '#fe9603';
            break;
          case selector.value = "asset/img/printmap/parenggean2.png":
            selector.style.backgroundColor = '#effb1b';
            break;
          case selector.value = "asset/img/printmap/parenggean.png":
            selector.style.backgroundColor = '#6cfd3e';
            break;
    }
  }
//FUNCTION UNTUK MEMILIH PERINGATAN DI FORM

var today=moment().add('days');
document.getElementById('date').value = today.format('D MMMM YYYY');

function timeToSet(timee,selector){
var settime = document.getElementsByName(timee)[0];
settime.value = selector.value;
}



