const files = [
    "writeups/DDC Nationals.md",
    "writeups/bof_emails_writeup.md",
    "writeups/el_reverso_writeup.md",
    "writeups/photo-album.md",
    "writeups/Regionals/Baby-session-forger.markdown",
    "writeups/Regionals/Bcrypt.markdown",
    "writeups/Regionals/Find-my-files.markdown",
    "writeups/Regionals/Gateway.markdown",
    "writeups/Regionals/Stucka99.markdown",
    "writeups/Regionals/Symon-spectacle.markdown",
    "writeups/Regionals/WizardTrial.markdown",
    "thm/pyrat_writeup.md"
  ];
  
  const nav = document.getElementById("fileList");
  const content = document.getElementById("content");
  
  files.forEach(file => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = file.replace(/\.md$|\.markdown$/, "").replace(/writeups\//, "").replace(/thm\//, "");
    link.onclick = (e) => {
      e.preventDefault();
      fetch(file)
        .then(res => res.text())
        .then(md => {
          content.innerHTML = marked.parse(md);
        })
        .catch(err => content.innerHTML = "Error loading file.");
    };
    nav.appendChild(link);
  });