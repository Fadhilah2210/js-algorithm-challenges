function cariAngkaGanda(listAngka) {
    let dilihat = new Set(); // Wadah untuk mencatat angka yang baru pertama kali dicek
    let ganda = new Set();   // Wadah khusus untuk menyimpan angka yang ketahuan ganda

    for (let angka of listAngka) {
        // Jika angka sudah ada di wadah 'dilihat', berarti angka ini ganda!
        if (dilihat.has(angka)) {
            ganda.add(angka);
        } else {
            // Jika belum ada, catat angka ini ke wadah 'dilihat'
            dilihat.add(angka);
        }
    }

    return Array.from(dilihat).join(', ');
}

// Mengeksekusi kode sesuai contoh input di soal
console.log("Output 1: " + cariAngkaGanda([3, 7, 3, 5, 9, 3, 5, 8, 5])); 
console.log("Output 2: " + cariAngkaGanda([1, 1, 1, 2, 2, 3, 4, 5, 5]));