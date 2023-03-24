
  downloadBtn.addEventListener("click", () => {
	  console.log(viewClicked)
    var opt = {
        quality: 1.5,
        width: 1080,
        height: 1075,
      };
    if(!viewClicked) {
      Swal.fire({
        title: 'Tidak Bisa Mendownload',
        text: "Silahkan Buka Tab View Terlebih Dahulu!",
        icon: 'warning',
        confirmButtonColor: '#3085d6',
      })
    } else if(waktu.value === ""){
        Swal.fire({
            title: 'Tidak Bisa Mendownload',
            text: "Silahkan isi form dengan lengkap ",
            icon: 'warning',
            confirmButtonColor: '#3085d6',
          })
    }else if(viewClicked && waktu.value !== "") {
        domtoimage.toBlob(view, opt).then(function (blob) {
            window.saveAs(
              blob,
              "PERINGATAN DINI " + today.format("D MMMM YYYY") + ".png"
            );
          });
    }
  })
