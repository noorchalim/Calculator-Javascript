const tombol = document.querySelector(".container-tombol");
const layer = document.querySelector("#layer");


tombol.addEventListener('click', function(e){
    let tombolClick = e.target
    let nilaiTombol = tombolClick.innerText;

   // (nilaiTombol=="C") ? layer.value = "" : layer.value = layer.value + nilaiTombol;

   if(nilaiTombol == "C"){
        layer.value = "";
    } else if(nilaiTombol =="<"){
        // menghapus satu angka terakhir
        layer.value = layer.value.slice(0, -1);
    }else if(nilaiTombol == "=" ){
        // menjumlahkan dengan eval
        layer.value = eval(layer.value);
    }else {
        // "ini adalah string" + iniVariable
        layer.value = layer.value + nilaiTombol;
    }

});