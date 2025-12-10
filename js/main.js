// main.js

// ปุ่ม filter Lost / Found
const chips = document.querySelectorAll(".chip");
const cards = document.querySelectorAll(".item-card");

chips.forEach((chip) => {
  chip.addEventListener("click", () => {

    function calculateImportanceScore(data) {
      const valueScore = {
        "low": 0.2,
        "medium": 0.5,
        "high": 0.8,
        "very_high": 1.0
      }[data.value_bucket] || 0.3;
    
      const categoryScore = {
        "phone": 1.0,
        "laptop": 1.0,
        "wallet": 1.0,
        "keys": 0.9,
        "medicine": 0.9,
        "bag": 0.7,
        "clothing": 0.3
      }[data.category] || 0.5;
    
      const docScore = data.has_docs ? 1.0 : 0.0;
    
      let score =
        0.4 * valueScore +
        0.3 * categoryScore +
        0.2 * docScore +
        0.1 * 1.0;
    
      return Math.min(score, 1.0);
    }

    
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
