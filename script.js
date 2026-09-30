// Data Resmi Panitia Yearbook XXVII SMAN 3 Banjarbaru
const committeeMembers = [
  { id: "YB27-001", name: "Bayu Setiawan", class: "XII-1", role: "Ketua" },
  { id: "YB27-002", name: "Muhammad Rakha Maulana", class: "XII-8", role: "Wakil Ketua" },
  { id: "YB27-003", name: "Rezky Aditya Ramadhani", class: "XII-2", role: "Sekretaris" },
  { id: "YB27-004", name: "Ayusita Putri Afandi", class: "XII-2", role: "Bendahara I" },
  { id: "YB27-005", name: "Rizkyta Amalia Zahra", class: "XII-1", role: "Bendahara II" },
  { id: "YB27-006", name: "Nourma Yunita", class: "XII-8", role: "Koor. Divisi Kreatif" },
  { id: "YB27-007", name: "Rashea Kamiya Iaquinta Dewi", class: "XII-1", role: "Anggota Divisi Kreatif" },
  { id: "YB27-008", name: "Callysta Aurellia Putri", class: "XII-2", role: "Anggota Divisi Kreatif" },
  { id: "YB27-009", name: "Raisa Noor Rahma Az-Zahra", class: "XII-3", role: "Anggota Divisi Kreatif" },
  { id: "YB27-010", name: "Keisya Namira Putri", class: "XII-5", role: "Anggota Divisi Kreatif" },
  { id: "YB27-011", name: "Azib Aminuddin", class: "XII-8", role: "Anggota Divisi Kreatif" },
  { id: "YB27-012", name: "Noor Haliza", class: "XII-8", role: "Anggota Divisi Kreatif" },
  { id: "YB27-013", name: "Muhammad Dwiki Youfan Iswadi", class: "XII-5", role: "Koor. Divisi Lapangan" },
  { id: "YB27-014", name: "Andhini Pusparana Sinaga", class: "XII-1", role: "Anggota Divisi Lapangan" },
  { id: "YB27-015", name: "Muhammad Mirza Trianda", class: "XII-1", role: "Anggota Divisi Lapangan" },
  { id: "YB27-016", name: "Rasya Dinda Azzahra", class: "XII-2", role: "Anggota Divisi Lapangan" },
  { id: "YB27-017", name: "Abidzar Putra Adiwangsa", class: "XII-3", role: "Anggota Divisi Lapangan" },
  { id: "YB27-018", name: "Rahman Maulana", class: "XII-3", role: "Anggota Divisi Lapangan" },
  { id: "YB27-019", name: "Denira Yasmin Azzahra Fajrie", class: "XII-4", role: "Anggota Divisi Lapangan" },
  { id: "YB27-020", name: "Eko Wismono Adi", class: "XII-4", role: "Anggota Divisi Lapangan" },
  { id: "YB27-021", name: "Fadhillah Zain Prambakti", class: "XII-4", role: "Anggota Divisi Lapangan" },
  { id: "YB27-022", name: "Muhammad Wajih", class: "XII-5", role: "Anggota Divisi Lapangan" },
  { id: "YB27-023", name: "Annisa Nur Adila", class: "XII-6", role: "Anggota Divisi Lapangan" },
  { id: "YB27-024", name: "Arvie Raffasha Witjaksono", class: "XII-6", role: "Anggota Divisi Lapangan" },
  { id: "YB27-025", name: "Junita", class: "XII-6", role: "Anggota Divisi Lapangan" },
  { id: "YB27-026", name: "Muhammad Dzikri Indra Rizqi", class: "XII-7", role: "Anggota Divisi Lapangan" },
  { id: "YB27-027", name: "Farrel Fawwaz Mandey", class: "XII-9", role: "Anggota Divisi Lapangan" },
  { id: "YB27-028", name: "Julia Rosyadah Inayah Putri", class: "XII-3", role: "Koor. PJ Kelas" },
  { id: "YB27-029", name: "Nita Rizqina", class: "XII-1", role: "Penanggungjawab Kelas" },
  { id: "YB27-030", name: "Mahda Putri Fauzia", class: "XII-2", role: "Penanggungjawab Kelas" },
  { id: "YB27-031", name: "Nadya Lailatul Khasanah", class: "XII-4", role: "Penanggungjawab Kelas" },
  { id: "YB27-032", name: "Nabila Maulida Zulaikah", class: "XII-5", role: "Penanggungjawab Kelas" },
  { id: "YB27-033", name: "Annisa Salsabila Wulan Aprilia", class: "XII-6", role: "Penanggungjawab Kelas" },
  { id: "YB27-034", name: "Tasya Nurwafa Rahimah", class: "XII-7", role: "Penanggungjawab Kelas" },
  { id: "YB27-035", name: "Maulida Nadira", class: "XII-8", role: "Penanggungjawab Kelas" },
  { id: "YB27-036", name: "Sherly Anggriani Kuswadi", class: "XII-9", role: "Penanggungjawab Kelas" },
  { id: "YB27-037", name: "Ayesha Syafiyah Ghaniya Audrie", class: "XII-10", role: "Penanggungjawab Kelas" }
];

// Mengisi pilihan dropdown nama
function populateSelect() {
  const select = document.getElementById('memberSelect');
  if (!select) return;
  select.innerHTML = '';
  
  committeeMembers.forEach((member, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `\({member.name} -\){member.role}`;
    select.appendChild(option);
  });

  updateCardData();
}

// Mengubah isi data kartu & generate QR Code
function updateCardData() {
  const select = document.getElementById('memberSelect');
  const selectedIndex = select ? select.value : 0;
  const member = committeeMembers[selectedIndex] || committeeMembers[0];

  // Update Tampilan Depan
  document.getElementById('frontName').textContent = member.name;
  document.getElementById('frontRole').textContent = member.role;
  document.getElementById('frontClass').textContent = member.class;
  document.getElementById('frontId').textContent = member.id;

  // Update ID Tampilan Belakang
  document.getElementById('backId').textContent = member.id;

  // Generate QR Code otomatis
  const qrContainer = document.getElementById('qrcode');
  if (qrContainer) {
    qrContainer.innerHTML = '';
    
    const qrText = `ID: \({member.id}\nNAMA:\){member.name}\nJABATAN: \({member.role}\nKELAS:\){member.class}\nSMAN 3 BANJARBARU`;

    new QRCode(qrContainer, {
      text: qrText,
      width: 90,
      height: 90,
      colorDark: "#3d0c08",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  }
}

// Fungsi membalik kartu 3D
function flipCard() {
  const card = document.getElementById('idCard');
  if (card) {
    card.classList.toggle('flipped');
  }
}

// Jalankan saat halaman dibuka
document.addEventListener("DOMContentLoaded", populateSelect);
