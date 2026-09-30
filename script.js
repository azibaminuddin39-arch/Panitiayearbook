// Data Panitia Yearbook XXVII SMAN 3 Banjarbaru
const membersData = [
  {
    id: "YB27-001",
    name: "Ahmad Rizky",
    role: "Ketua Panitia",
    class: "XII MIPA 1"
  },
  {
    id: "YB27-002",
    name: "Siti Nurhaliza",
    role: "Sekretaris",
    class: "XII MIPA 2"
  },
  {
    id: "YB27-003",
    name: "Budi Santoso",
    role: "Bendahara",
    class: "XII IPS 1"
  },
  {
    id: "YB27-004",
    name: "Dewi Anggraini",
    role: "Sie Acara",
    class: "XII MIPA 3"
  },
  {
    id: "YB27-005",
    name: "Fajar Pratama",
    role: "Sie Dokumentasi",
    class: "XII IPS 2"
  }
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

// Perbarui Tampilan ID Card & Hasilkan QR Code Khusus Orang Ini
function updateCardData(member) {
  document.getElementById("frontName").textContent = member.name;
  document.getElementById("frontRole").textContent = member.role;
  document.getElementById("frontClass").textContent = member.class;
  document.getElementById("frontId").textContent = member.id;
  document.getElementById("backId").textContent = member.id;

  // URL Unik untuk QR Code orang ini
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
