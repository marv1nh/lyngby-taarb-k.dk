const files = ["intro.md", "challenge1.md", "challenge2.md"]; // tilpas dette!

const nav = document.getElementById("fileList");
const content = document.getElementById("content");

files.forEach(file => {
  const link = document.createElement("a");
  link.href = "#";
  link.textContent = file.replace(".md", "");
  link.onclick = () => {
    fetch(`writeups/DDC Nationals${file}`)
      .then(res => res.text())
      .then(md => {
        content.innerHTML = marked.parse(md);
      });
  };
  nav.appendChild(link);
});
