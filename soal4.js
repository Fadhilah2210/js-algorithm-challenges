function hitungUmur(tanggalInput) {
    // 1. Memecah input dengan format mm-dd-yyyy
    const bagian = tanggalInput.split('-');
    const bulanLahir = parseInt(bagian[0]) - 1; // Di JavaScript, bulan dimulai dari 0 (Januari)
    const hariLahir = parseInt(bagian[1]);
    const tahunLahir = parseInt(bagian[2]);

    const tglLahir = new Date(tahunLahir, bulanLahir, hariLahir);
    const tglSekarang = new Date(); // Mengambil tanggal hari ini secara otomatis

    // 2. Menghitung selisih tahun, bulan, dan hari
    let tahun = tglSekarang.getFullYear() - tglLahir.getFullYear();
    let bulan = tglSekarang.getMonth() - tglLahir.getMonth();
    let hari = tglSekarang.getDate() - tglLahir.getDate();

    // Logika meminjam hari jika hasilnya minus
    if (hari < 0) {
        bulan--;
        // Mengambil jumlah hari pada bulan sebelumnya
        const bulanSebelumnya = new Date(tglSekarang.getFullYear(), tglSekarang.getMonth(), 0);
        hari += bulanSebelumnya.getDate();
    }

    // Logika meminjam tahun jika bulan minus
    if (bulan < 0) {
        tahun--;
        bulan += 12;
    }

    // 3. Menghitung jumlah tahun kabisat yang terlewati
    let jumlahKabisat = 0;
    let daftarKabisat = [];
    for (let y = tahunLahir; y <= tglSekarang.getFullYear(); y++) {
        // Syarat tahun kabisat: habis dibagi 4, tapi jika kelipatan 100 harus bisa dibagi 400
        const isKabisat = (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
        
        if (isKabisat) {
            // Memastikan tanggal 29 Februari di tahun tersebut benar-benar sudah terlewati
            const tglKabisat = new Date(y, 1, 29); // 1 = Februari
            if (tglKabisat >= tglLahir && tglKabisat <= tglSekarang) {
                daftarKabisat.push(y);
            }
        }
    }

    // 4. Menampilkan hasil
    console.log(`${tahun} tahun, ${bulan} bulan, ${hari} hari, ${jumlahKabisat} tahun kabisat`);
    console.log(`Daftar Tahun Kabisat yang Dilewati: ${daftarKabisat.join(', ')}`);
    console.log(`Total Tahun Kabisat: ${daftarKabisat.length}`);
}

// Mengeksekusi kode sesuai contoh di soal
hitungUmur("08-12-1990");
hitungUmur("08-12-2003");