const membersData = [
  { id: "YB27-001", name: "Bayu Setiawan", role: "Ketua", class: "XII-1" },
  { id: "YB27-002", name: "Muhammad Rakha Maulana", role: "Wakil Ketua", class: "XII-8" },
  { id: "YB27-003", name: "Rezky Aditya Ramadhani", role: "Sekretaris", class: "XII-2" },
  { id: "YB27-004", name: "Ayusita Putri Afandi", role: "Bendahara I", class: "XII-2" },
  { id: "YB27-005", name: "Rizkyta Amalia Zahra", role: "Bendahara II", class: "XII-1" },
  { id: "YB27-006", name: "Nourma Yunita", role: "Koor. Divisi Kreatif", class: "XII-8" },
  { id: "YB27-007", name: "Rashea Kamiya Iaquinta Dewi", role: "Anggota Divisi Kreatif", class: "XII-1" },
  { id: "YB27-008", name: "Raisa Noor Rahma Az-Zahra", role: "Anggota Divisi Kreatif", class: "XII-3" },
  { id: "YB27-009", name: "Keisya Namira Putri", role: "Anggota Divisi Kreatif", class: "XII-5" },
  { id: "YB27-010", name: "Azib Aminuddin", role: "Anggota Divisi Kreatif", class: "XII-8" },
  { id: "YB27-011", name: "Muhammad Dwiki Youfan Iswadi", role: "Koor. Divisi Lapangan", class: "XII-5" },
  { id: "YB27-012", name: "Andhini Pusparana Sinaga", role: "Anggota Divisi Lapangan", class: "XII-1" },
  { id: "YB27-013", name: "Muhammad Mirza Trianda", role: "Anggota Divisi Lapangan", class: "XII-1" },
  { id: "YB27-014", name: "Rasya Dinda Azzahra", role: "Anggota Divisi Lapangan", class: "XII-2" },
  { id: "YB27-015", name: "Abidzar Putra Adiwangsa", role: "Anggota Divisi Lapangan", class: "XII-3" },
  { id: "YB27-016", name: "Rahman Maulana", role: "Anggota Divisi Lapangan", class: "XII-3" },
  { id: "YB27-017", name: "Denira Yasmin Azzahra Fajrie", role: "Anggota Divisi Lapangan", class: "XII-4" },
  { id: "YB27-018", name: "Eko Wismono Adi", role: "Anggota Divisi Lapangan", class: "XII-4" },
  { id: "YB27-019", name: "Fadhillah Zain Prambakti", role: "Anggota Divisi Lapangan", class: "XII-4" },
  { id: "YB27-020", name: "Muhammad Wajih", role: "Anggota Divisi Lapangan", class: "XII-5" },
  { id: "YB27-021", name: "Annisa Nur Adila", role: "Anggota Divisi Lapangan", class: "XII-6" },
  { id: "YB27-022", name: "Arvie Raffasha Witjaksono", role: "Anggota Divisi Lapangan", class: "XII-6" },
  { id: "YB27-023", name: "Junita", role: "Anggota Divisi Lapangan", class: "XII-6" },
  { id: "YB27-024", name: "Muhammad Dzikri Indra Rizqi", role: "Anggota Divisi Lapangan", class: "XII-7" },
  { id: "YB27-025", name: "Farrel Fawwaz Mandey", role: "Anggota Divisi Lapangan", class: "XII-9" }
];

let qrcode = null;
let scanTimeout = null;
let fadeTimeout = null;

function initPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const targetId = urlParams.get('id');

  let selectedMember = membersData[0];

  if (targetId) {
    const found = membersData.find(m => m.id === targetId);
    if (found) {
      selectedMember = found;
    }
  }

  updateCardData(selectedMember);

  const hasScanned = sessionStorage.getItem('hasScanned');
  const scanBadge = document.getElementById('scanBadge');

  if (!hasScanned) {
    setTimeout(triggerLaserScan, 400);
    sessionStorage.setItem('hasScanned', 'true');
  } else {
    if (scanBadge) {
      scanBadge.style.display = 'none';
    }
  }

  const photoWrapper = document.querySelector('.photo-wrapper');
  if (photoWrapper) {
    photoWrapper.addEventListener('click', triggerLaserScan);
    photoWrapper.style.cursor = 'pointer';
    photoWrapper.title = 'Klik untuk scan biometrik ulang';
  }
}

function updateCardData(member) {
  document.getElementById("frontName").textContent = member.name;
  document.getElementById("frontRole").textContent = member.role;
  document.getElementById("frontClass").textContent = member.class;
  document.getElementById("frontId").textContent = member.id;
  document.getElementById("backId").textContent = member.id;

  const uniqueUrl = `https://panitiayearbook.pages.dev/?id=${member.id}`;
  generateQRCode(uniqueUrl);
}

function flipCard() {
  const card = document.getElementById("idCard") || document.querySelector(".card");
  if (card) {
    card.classList.toggle("flipped");
  }
}

function generateQRCode(text) {
  const qrContainer = document.getElementById("qrcode");
  if (!qrContainer) return;
  qrContainer.innerHTML = "";
  
  // Ukuran diperbesar dari 75x75 menjadi 115x115 dengan penanganan ketajaman piksel
  qrcode = new QRCode(qrContainer, {
    text: text,
    width: 115,
    height: 115,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

function triggerLaserScan() {
  const laser = document.getElementById('laserScanner');
  const statusText = document.getElementById('statusText');
  const statusDot = document.querySelector('.status-dot');
  const scanBadge = document.getElementById('scanBadge');

  if (!laser) return;

  clearTimeout(scanTimeout);
  clearTimeout(fadeTimeout);

  if (scanBadge) {
    scanBadge.style.display = 'flex';
    scanBadge.classList.remove('fade-out');
  }

  laser.classList.remove('active-scan');
  void laser.offsetWidth;
  laser.classList.add('active-scan');

  if (statusText) {
    statusText.innerText = "SCANNING...";
    statusText.style.color = "#f1d382";
  }
  if (statusDot) {
    statusDot.style.backgroundColor = "#f1d382";
    statusDot.style.boxShadow = "0 0 8px #f1d382";
  }

  scanTimeout = setTimeout(() => {
    if (statusText) {
      statusText.innerText = "ACCESS GRANTED ✓";
      statusText.style.color = "#2ed573";
    }
    if (statusDot) {
      statusDot.style.backgroundColor = "#2ed573";
      statusDot.style.boxShadow = "0 0 10px #2ed573";
    }

    fadeTimeout = setTimeout(() => {
      if (scanBadge) {
        scanBadge.classList.add('fade-out');
      }
    }, 1500);

  }, 2400);
}

window.onload = initPage;
