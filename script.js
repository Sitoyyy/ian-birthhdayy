const countdownElement = document.getElementById("countdown");
const messageElement = document.getElementById("message");

// Tanggal ulang tahun berikutnya (29 Mei 2025)
const targetDate = new Date("May 29, 2025 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if (distance <= 0) {
    clearInterval(timer);
    messageElement.classList.remove("hidden");
    countdownElement.style.display = "none";
  } else {
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  }
}

// Update setiap detik
const timer = setInterval(updateCountdown, 1000);

// Jalankan sekali saat load
updateCountdown();
