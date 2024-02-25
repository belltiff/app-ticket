alert("APLIKASI TICKET \n Pilihan Film: \n Studio A = Haikyuu!! \n Studio B = Demon Slayer \n Studio C = The Promised Neverland");

const nama = prompt("Masukkan nama");
const umur = parseInt(prompt("Masukkan umur"));

if (umur > 13) {
    const pilihanStudio = prompt("Anda boleh masuk studio. Pilih studio (A, B, atau C):");
    
    if (pilihanStudio === 'A') {
        alert(`Tiket ${nama}, Umur ${umur}, Studio A, Film Haikyuu!!`);
    } else if (pilihanStudio === 'B') {
        alert(`Tiket ${nama}, Umur ${umur}, Studio B, Film Demon Slayer`);
    } else if (pilihanStudio === 'C') {
        alert(`Tiket ${nama}, Umur ${umur}, Studio C, Film The Promised Neverland`);
    } else {
        alert("Pilihan studio tidak valid.");
    }
} else {
    alert(`Maaf ${nama}, Anda tidak boleh masuk studio karena usia Anda di bawah 13 tahun.`);
}