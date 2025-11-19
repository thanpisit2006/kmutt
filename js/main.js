// main.js

// ปุ่ม filter Lost / Found
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".item-card");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const filter = chip.dataset.filter; // "lost" หรือ "found"

    // เปลี่ยนสถานะ active ของปุ่ม
    chips.forEach((c) => c.classList.remove("active"));
    chip.classList.add("active");

    // ถ้าอยากให้โชว์ทุกอันเมื่อเลือก "lost" หรือ "found" ก็ปรับ logic ได้
    cards.forEach((card) => {
      const type = card.dataset.type; // type ของการ์ด

      if (type === filter) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
});