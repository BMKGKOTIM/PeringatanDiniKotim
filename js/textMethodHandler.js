
function textToMap()
{
	let textOri = document.getElementById("text-method").value;
	let peringatanDiniArray = textOri.split("berpotensi terjadi Hujan Sedang-Lebat yang dapat disertai Kilat/Petir dan Angin Kencang")
	let meluasKeArray = textOri.split("Dan dapat meluas ke wilayah")
	let searchByKotim = peringatanDiniArray[1].split("Kabupaten Kotawaringin Timur:")
	let searchByKotim2 = meluasKeArray[1].split("Kotawaringin Timur:")
	console.log(searchByKotim2)
    let peringatanDini = searchByKotim[1].split(","),
    meluasKe = searchByKotim2[searchByKotim2.length - 1].split(",")
	console.log(meluasKe)
    
    
for(let i = 0; i < peringatanDini.length ; i++) {
    let x = peringatanDini[i];
    x == " Teluk Sampit" ? 
    getNameMap("teluksampit", "asset/img/printmap/teluksampit1.png") : 
    x == " Antang Kalang" ?
    getNameMap("antangkalang", "asset/img/printmap/antangkalang1.png") : 
    x == " Pulau Hanaut" ?
    getNameMap("pulauhanaut", "asset/img/printmap/pulauhanaut1.png") : 
    x == " Baamang" ?
    getNameMap("baamang", "asset/img/printmap/baamang1.png") : 
    x == " Seranau" ?
    getNameMap("seranau", "asset/img/printmap/seranau1.png") : 
    x == " Bukit Santuai" ?
    getNameMap("bukitsantuai", 'asset/img/printmap/bukitsantuai1.png') :
    x == " Telaga Antang" ?
    getNameMap("telagaantang", 'asset/img/printmap/telagaantang1.png') :
    x == " Cempaga" ?
    getNameMap("cempaga", 'asset/img/printmap/cempaga1.png') :
    x == " Telawang" ?
    getNameMap("telawang", 'asset/img/printmap/telawang1.png') :
    x == " Cempaga Hulu" ?
    getNameMap("cempagahulu", 'asset/img/printmap/cempagahulu1.png') :
    x == " Kota Besi" ?
    getNameMap("kotabesi", 'asset/img/printmap/kotabesi1.png') :
    x == " Tualan Hulu" ?
    getNameMap("tualanhulu", 'asset/img/printmap/tualanhulu1.png') :
    x == " Mentawa Baru Ketapang" ?
    getNameMap("mentawabaruketapang", "asset/img/printmap/mentawabaruketapang1.png") :
    x == " Mentaya Hilir Selatan" ?
    getNameMap("mentayahilirselatan", "asset/img/printmap/mentayahilirselatan1.png") :
    x == " Mentaya Hilir Utara" ?
    getNameMap("mentayahilirutara", "asset/img/printmap/mentayahilirutara1.png") :
    x == " Mentaya Hulu" ?
    getNameMap("mentayahulu", "asset/img/printmap/mentayahulu1.png") :
    x == " Parenggean" ?
    getNameMap("parenggean", "asset/img/printmap/parenggean1.png") :
    ""
}

for(let i = 0; i < meluasKe.length ; i++) {
    let y = meluasKe[i];
    y == " Teluk Sampit" ? 
    getNameMap("teluksampit", "asset/img/printmap/teluksampit2.png") : 
     y == " Pulau Hanaut" ?
    getNameMap("pulauhanaut", "asset/img/printmap/pulauhanaut2.png") : 
	y == " Antang Kalang" ?
    getNameMap("antangkalang", "asset/img/printmap/antangkalang2.png") : 
 
    y == " Baamang" ?
    getNameMap("baamang", "asset/img/printmap/baamang2.png") : 
    y == " Seranau" ?
    getNameMap("seranau", "asset/img/printmap/seranau2.png") : 
    y == " Bukit Santuai" ?
    getNameMap("bukitsantuai", 'asset/img/printmap/bukitsantuai2.png') :
    y == " Telaga Antang" ?
    getNameMap("telagaantang", 'asset/img/printmap/telagaantang2.png') :
    y == " Cempaga" ?
    getNameMap("cempaga", 'asset/img/printmap/cempaga2.png') :
    y == " Telawang" ?
    getNameMap("telawang", 'asset/img/printmap/telawang2.png') :
    y == " Cempaga Hulu" ?
    getNameMap("cempagahulu", 'asset/img/printmap/cempagahulu2.png') :
    y == " Kota Besi" ?
    getNameMap("kotabesi", 'asset/img/printmap/kotabesi2.png') :
    y == " Tualan Hulu" ?
    getNameMap("tualanhulu", 'asset/img/printmap/tualanhulu2.png') :
    y == " Mentawa Baru Ketapang" ?
    getNameMap("mentawabaruketapang", "asset/img/printmap/mentawabaruketapang2.png") :
    y == " Mentaya Hilir Selatan" ?
    getNameMap("mentayahilirselatan", "asset/img/printmap/mentayahilirselatan2.png") :
    y == " Mentaya Hilir Utara" ?
    getNameMap("mentayahilirutara", "asset/img/printmap/mentayahilirutara2.png") :
    y == " Mentaya Hulu" ?
    getNameMap("mentayahulu", "asset/img/printmap/mentayahulu2.png") :
    y == " Parenggean" ?
    getNameMap("parenggean", "asset/img/printmap/parenggean2.png") :
    ""


}
}


function getNameMap(name, src){
    document.getElementsByName(name)[0].src = src
}
