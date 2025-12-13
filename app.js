(function () {
  const qs = new URLSearchParams(location.search);
  const id = (qs.get("id") || "").trim();
  const player = document.getElementById("player");
  const btn = document.getElementById("downloadBtn");
  const errorBox = document.getElementById("errorBox");

  const SMARTLINK_URL = "https://harbourbreederdump.com/an29v43y4m?key=549781a632ef3b8389ad01c914a1ee3a";

  if (!id) {
    errorBox.style.display = "block";
    errorBox.textContent = "Parameter id tidak ditemukan. Contoh: ?id=LIWPZnsS1";
    return;
  }

  const videoUrl = `https://cdn.videy.co/${encodeURIComponent(id)}.mp4`;
  player.src = videoUrl;

  btn.onclick = () => {
    window.location.href = SMARTLINK_URL;
  };

  player.addEventListener("error", () => {
    errorBox.style.display = "block";
    errorBox.textContent = "Video gagal dimuat. Periksa ID atau sumber CDN.";
  });
})();