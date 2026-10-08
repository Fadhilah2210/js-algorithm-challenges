function balikStringRekursif(teks) {
    //Kondisi Berhenti
    if (teks === "") {
        return "";
    } 
    // Langkah Rekursif 
    else {
        return balikStringRekursif(teks.substring(1)) + teks.charAt(0);
    }
}

// Mengeksekusi kode sesuai contoh di soal
console.log(balikStringRekursif("INDONESIA")); 
console.log(balikStringRekursif("LARAVEL"));  
console.log(balikStringRekursif("JAVASCRIPT"));   