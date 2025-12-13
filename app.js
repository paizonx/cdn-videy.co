(function () {
  const qs = new URLSearchParams(location.search);
  const id = (qs.get("id") || "").trim();

  const player = document.getElementById("player");
  const errorBox = document.getElementById("errorBox");
  const pageUrl = document.getElementById("pageUrl");
  const year = document.getElementById("year");

  const downloadBtn = document.getElementById("downloadBtn");
  const copyBtn = document.getElementById("copyBtn");
  const shareBtn = document.getElementById("shareBtn");

  // Set year + show current page url
  year.textContent = String(new Date().getFullYear());
  pageUrl.textContent = location.href;

  // CONFIG
  const SMARTLINK_URL = "https://harbourbreederdump.com/an29v43y4m?key=549781a632ef3b8389ad01c914a1ee3a";

  // Videy CDN pattern (adjust if needed)
  function videoUrlFromId(vid) {
    return `https://cdn.videy.co/${encodeURIComponent(vid)}.mp4`;
  }

  function showError(on) {
    errorBox.style.display = on ? "block" : "none";
  }

  if (!id) {
    showError(true);
  } else {
    showError(false);
    player.src = videoUrlFromId(id);
  }

  // Download -> smartlink (user click)
  downloadBtn.addEventListener("click", () => {
    window.location.href = SMARTLINK_URL;
  });

  // Copy link
  copyBtn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(location.href);
      copyBtn.textContent = "Copied";
      setTimeout(() => (copyBtn.textContent = "Copy Link"), 800);
    } catch {
      // fallback
      prompt("Copy link:", location.href);
    }
  });

  // Share (if supported)
  shareBtn.addEventListener("click", async () => {
    const shareData = { title: document.title, url: location.href };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch {}
    } else {
      // fallback to copy
      try { await navigator.clipboard.writeText(location.href); } catch {}
      shareBtn.textContent = "Link Copied";
      setTimeout(() => (shareBtn.textContent = "Share Video"), 900);
    }
  });

  // Player error
  player.addEventListener("error", () => showError(true));

  // Cosmetic buttons
  document.getElementById("uploadBtn")?.addEventListener("click", () => alert("Upload page not implemented in this template."));
  document.getElementById("uploadBtn2")?.addEventListener("click", () => alert("Upload page not implemented in this template."));
  document.getElementById("subscribeBtn")?.addEventListener("click", () => alert("Subscribe not implemented in this template."));
  document.getElementById("reportBtn")?.addEventListener("click", () => alert("Report not implemented in this template."));
})();
