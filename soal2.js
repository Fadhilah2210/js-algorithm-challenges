// Fungsi bantuan untuk mengecek apakah sebuah angka adalah bilangan prima
function isPrima(angka) {
    if (angka < 2) return false;
    
    // Mengecek dari angka 2 sampai sebelum angka itu sendiri
    for (let i = 2; i < angka; i++) {
        if (angka % i === 0) {
            return false; // Jika bisa dibagi angka lain, berarti bukan prima
        }
    }
    return true; // Jika tidak bisa dibagi angka lain, berarti prima
}

// Fungsi untuk memproses input sesuai soal
function hitungPrima(n) {
    let deretPrima = [];
    let totalJumlah = 0;

    // Looping dari 2 sampai angka sebelum n (karena harus lebih kecil dari n)
    for (let i = 2; i < n; i++) {
        if (isPrima(i)) {
            deretPrima.push(i);     // Masukkan angka prima ke dalam array
            totalJumlah += i;       // Tambahkan angka tersebut ke totalJumlah
        }
    }

    // Menampilkan hasil sesuai format di soal
    console.log("Input: " + n);
    console.log(deretPrima);
    console.log(totalJumlah + "\n");
}

// Menjalankan fungsi dengan contoh dari soal
hitungPrima(6);
hitungPrima(12);