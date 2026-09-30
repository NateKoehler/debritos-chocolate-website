// Paste the online store link here once it's set up (Square Online, Shopify, etc.).
// Until then, every "Order" button calls the shop.
const ORDER_URL = "";

if (ORDER_URL) {
  document.querySelectorAll("[data-order]").forEach((a) => {
    a.href = ORDER_URL;
    a.target = "_blank";
    a.rel = "noopener";
  });
} else {
  document.querySelectorAll("[data-order]").forEach((a) => {
    a.textContent = a.textContent.replace(/^Order online$/, "Call to order").replace(/^Order /, "Call to order ").replace(/^Give the club$/, "Call to order the club");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
