// Data Resmi Panitia Yearbook XXVII SMAN 3 Banjarbaru (No. 1 - 27)
const membersData = [
  { id: "YB27-001", name: "Bayu Setiawan", role: "Ketua", class: "XII-1" },
  { id: "YB27-002", name: "Muhammad Rakha Maulana", role: "Wakil Ketua", class: "XII-8" },
  { id: "YB27-003", name: "Rezky Aditya Ramadhani", role: "Sekretaris", class: "XII-2" },
  { id: "YB27-004", name: "Ayusita Putri Afandi", role: "Bendahara I", class: "XII-2" },
  { id: "YB27-005", name: "Rizkyta Amalia Zahra", role: "Bendahara II", class: "XII-1" },
  { id: "YB27-006", name: "Nourma Yunita", role: "Koor. Divisi Kreatif", class: "XII-8" },
  { id: "YB27-007", name: "Rashea Kamiya Iaquinta Dewi", role: "Anggota Divisi Kreatif", class: "XII-1" },
  { id: "YB27-008", name: "Callysta Aurellia Putri", role: "Anggota Divisi Kreatif", class: "XII-2" },
  { id: "YB27-009", name: "Raisa Noor Rahma Az-Zahra", role: "Anggota Divisi Kreatif", class: "XII-3" },
  { id: "YB27-010", name: "Keisya Namira Putri", role: "Anggota Divisi Kreatif", class: "XII-5" },
  { id: "YB27-011", name: "Azib Aminuddin", role: "Anggota Divisi Kreatif", class: "XII-8" },
  { id: "YB27-012", name: "Noor Haliza", role: "Anggota Divisi Kreatif", class: "XII-8" },
  { id: "YB27-013", name: "Muhammad Dwiki Youfan Iswadi", role: "Koor. Divisi Lapangan", class: "XII-5" },
  { id: "YB27-014", name: "Andhini Pusparana Sinaga", role: "Anggota Divisi Lapangan", class: "XII-1" },
  { id: "YB27-015", name: "Muhammad Mirza Trianda", role: "Anggota Divisi Lapangan", class: "XII-1" },
  { id: "YB27-016", name: "Rasya Dinda Azzahra", role: "Anggota Divisi Lapangan", class: "XII-2" },
  { id: "YB27-017", name: "Abidzar Putra Adiwangsa", role: "Anggota Divisi Lapangan", class: "XII-3" },
  { id: "YB27-018", name: "Rahman Maulana", role: "Anggota Divisi Lapangan", class: "XII-3" },
  { id: "YB27-019", name: "Denira Yasmin Azzahra Fajrie", role: "Anggota Divisi Lapangan", class: "XII-4" },
  { id: "YB27-020", name: "Eko Wismono Adi", role: "Anggota Divisi Lapangan", class: "XII-4" },
  { id: "YB27-021", name: "Fadhillah Zain Prambakti", role: "Anggota Divisi Lapangan", class: "XII-4" },
  { id: "YB27-022", name: "Muhammad Wajih", role: "Anggota Divisi Lapangan", class: "XII-5" },
  { id: "YB27-023", name: "Annisa Nur Adila", role: "Anggota Divisi Lapangan", class: "XII-6" },
  { id: "YB27-024", name: "Arvie Raffasha Witjaksono", role: "Anggota Divisi Lapangan", class: "XII-6" },
  { id: "YB27-025", name: "Junita", role: "Anggota Divisi Lapangan", class: "XII-6" },
  { id: "YB27-026", name: "Muhammad Dzikri Indra Rizqi", role: "Anggota Divisi Lapangan", class: "XII-7" },
  { id: "YB27-027", name: "Farrel Fawwaz Mandey", role: "Anggota Divisi Lapangan", class: "XII-9" }
];

let qrcode = null;

// Inisialisasi: Cek Link Parameter ID
function initPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get('id');

  // Default ke panitia pertama jika tidak ada ID di URL
  let selectedMember = membersData[0];

  if (targetId) {
    const found = membersData.find(m => m.id === targetId);
    if (found) {
      selectedMember = found;
    }
  }

  updateCardData(selectedMember);
}

// Perbarui Tampilan ID Card & Hasilkan QR Code Khusus
function updateCardData(member) {
  document.getElementById("frontName").textContent = member.name;
  document.getElementById("frontRole").textContent = member.role;
  document.getElementById("frontClass").textContent = member.class;
  document.getElementById("frontId").textContent = member.id;
  document.getElementById("backId").textContent = member.id;

  // URL Unik untuk QR Code masing-masing orang
  const uniqueUrl = `https://panitiayearbook.pages.dev/?id=${member.id}`;
  generateQRCode(uniqueUrl);
}

// Fitur Balik Kartu (Flip 3D)
function flipCard() {
  const card = document.getElementById("idCard");
  card.classList.toggle("flipped");
}

// Fitur Pembuat QR Code
function generateQRCode(text) {
  const qrContainer = document.getElementById("qrcode");
  qrContainer.innerHTML = "";
  qrcode = new QRCode(qrContainer, {
    text: text,
    width: 75,
    height: 75,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

// Jalankan saat halaman selesai dimuat
window.onload = initPage;
