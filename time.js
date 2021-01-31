// setTimeout (function, berapa detik);
setTimeout(tes, 3000);

// output nya keluar di console
function tes(){
    console.log("ini dipanggil secara otomatis bila tak percaya silahkan refresh dan perhatikan tulisan di bagian bawah button SetiTimeout manual");
    console.error("Elaina wangy wangy");
    document.getElementById("pemberitahuan").innerHTML = "cek console output otomatis sudah keluar" ;
}

// memanggil setTimeout didalam fungsi 
function tesTimeout(){
    setTimeout(timetes, 2000);
}

function timetes(){
    alert("output SetTimeout button sudah keluar");
};

// SetInterval (function, berapa detik)

// contoh penggunaan SetInterval secara otomatis
setInterval(timer, 1000);

function timer(){
const time = new Date() ;
document.getElementById("contohtimer").innerHTML = time.toLocaleTimeString() ;
};

// contoh pengunaan setInterval
function manualTrigger(){
setInterval(norandom, 1000);
}

// ngerandom no secara otomatis
function norandom(){
    // mengeluarkan no random dari 0 & 9
   document.getElementById("randomnumber").innerHTML = "mengeluarkan no random 0 & 9  setiap 1 detik</br>" + Math.floor(Math.random() * 10);    
}

// Clearinterval ()

const inter = setInterval(timeraktif, 1000);

function timeraktif(){
    const time = new Date() ;
    document.getElementById("stoptimer").innerHTML = time.toLocaleTimeString() ;
};

// menghentikan timer
function stoptimer(){
    clearInterval(inter)
}

// otomatis 

const stop2 = setInterval(timerotomatis, 1000);

function timerotomatis(){
    const time = new Date() ;
    document.getElementById("stoptimer2").innerHTML = time.toLocaleTimeString() ;
};

// pengabungan antara setimeout dan setinterval

setTimeout(timerberhenti,15000)

function timerberhenti(){
    clearInterval(stop2)
};
