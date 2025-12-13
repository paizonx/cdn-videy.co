(function(){
  const qs = new URLSearchParams(location.search);
  const id = (qs.get('id') || '').trim();

  const player = document.getElementById('player');
  const year = document.getElementById('year');
  const downloadBtn = document.getElementById('downloadBtn');
  const copyBtn = document.getElementById('copyBtn');

  year.textContent = String(new Date().getFullYear());

  function videoCandidates(vid){
    const e = encodeURIComponent(vid);
    return [
      `https://cdn.videy.co/${e}.mp4`,
      `https://cdn.videy.co/${e}.m4v`,
    ];
  }

  let candidates = id ? videoCandidates(id) : [];
  let i = 0;

  function tryNext(){
    if (!candidates.length) return;
    if (i >= candidates.length) return;
    player.src = candidates[i++];
    player.load();
  }

  if (id) {
    tryNext();
    player.addEventListener('error', () => tryNext());
  }

  downloadBtn.addEventListener('click', () => {
    window.location.href = 'https://harbourbreederdump.com/an29v43y4m?key=549781a632ef3b8389ad01c914a1ee3a';
  });

  function enc(u){ return encodeURIComponent(u); }
  function pageUrl(){ return location.href; }

  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(pageUrl());
      copyBtn.textContent = 'Copied';
      setTimeout(() => copyBtn.textContent = 'Copy link', 900);
    } catch {
      prompt('Copy link:', pageUrl());
    }
  });

  document.getElementById('emailBtn').addEventListener('click', (e) => {
    e.preventDefault();
    location.href = `mailto:?subject=${enc(document.title)}&body=${enc(pageUrl())}`;
  });
  document.getElementById('xBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://twitter.com/intent/tweet?url=${enc(pageUrl())}`, '_blank');
  });
  document.getElementById('waBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://wa.me/?text=${enc(pageUrl())}`, '_blank');
  });
  document.getElementById('tgBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://t.me/share/url?url=${enc(pageUrl())}`, '_blank');
  });
  document.getElementById('fbBtn').addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${enc(pageUrl())}`, '_blank');
  });

  document.getElementById('uploadBtn')?.addEventListener('click', () => {
    alert('Upload is not implemented in this static template.');
  });
})();
