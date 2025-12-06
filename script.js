// Universal Temporal Coordinates (UTC) value
const now = new Date();
const utcIso = now.toISOString().replace("T", " ").split(".")[0];

const utcEl = document.getElementById("utc-value");
if (utcEl) {
  utcEl.textContent = utcIso;
}

// Pseudo build ID: HL-YYMMDDHH-rand
const buildEl = document.getElementById("build-id");
if (buildEl) {
  const id =
    "HL-" +
    utcIso.slice(2, 10).replace(/-/g, "") +
    "-" +
    Math.floor(Math.random() * 900 + 100);
  buildEl.textContent = id;
}
