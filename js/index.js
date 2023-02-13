  let viewClicked = false,
    downloadBtn = document.getElementById("download"),
    viewBtn = document.getElementById("view-tab"),
    formBtn = document.getElementById("form-tab"),
    view = document.getElementById("view"),
    pemberitahuan = document.querySelector(".pemberitahuan"),
    waktu = document.querySelector(".time")

  if (!viewClicked ) {
    pemberitahuan.style.display = 'none'
  }

  viewBtn.addEventListener("click", () => {
    viewClicked = true
    if(!window.orientation > 1) {
      pemberitahuan.style.display = 'block'  
    }
  });
  formBtn.addEventListener("click", () => {
    viewClicked = false
    if(!window.orientation > 1) {
      pemberitahuan.style.display = 'none'  
    } 
  });

  
