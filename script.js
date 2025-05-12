const files = [
  "writeups/DDC Nationals.md",
  "writeups/bof_emails_writeup.md",
  "writeups/el_reverso_writeup.md",
  "writeups/photo-album.md",
  "writeups/Regionals/Baby-session-forger.markdown",
  "writeups/Regionals/Bcrypt.markdown",
  "writeups/Regionals/Find-my-files.markdown",
  "writeups/Regionals/Gateway.markdown",
  "writeups/Regionals/Stuckat99.markdown",
  "writeups/Regionals/Symon-spectacle.markdown",
  "writeups/Regionals/WizardTrial.markdown",
  "thm/pyrat_writeup.md"
];

const nav = document.getElementById("fileList");
const content = document.getElementById("content");

files.forEach(file => {
  const link = document.createElement("a");
  link.href = "#";
  // Clean up the file name for display
  let displayName = file
    .replace(/\.md$|\.markdown$/, "")
    .replace(/writeups\//, "")
    .replace(/thm\//, "")
    .replace(/Regionals\//, "Regionals: ")
    .replace(/_/g, " ")
    .replace(/writeup/g, "")
    .trim();
  link.textContent = displayName;
  link.onclick = (e) => {
    e.preventDefault();
    fetch(file)
      .then(res => res.text())
      .then(md => {
        content.innerHTML = marked.parse(md);
        Prism.highlightAll(); // Highlight code blocks
      })
      .catch(err => content.innerHTML = "Error loading writeup.");
  };
  nav.appendChild(link);
});