// post-detail.js

// พิกัดตัวอย่าง (สมมติเป็น KMUTT)
const kmuttLatLng = [13.6517, 100.4941];

const map = L.map("map").setView(kmuttLatLng, 16);

// ใช้ tile ฟรีจาก OpenStreetMap
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// ปักหมุดตำแหน่งโดยประมาณของของหาย
L.marker(kmuttLatLng)
  .addTo(map)
  .bindPopup("Approximate location where the item was lost.")
  .openPopup();