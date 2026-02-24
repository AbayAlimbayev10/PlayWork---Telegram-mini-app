const tg = window.Telegram?.WebApp;

const statusEl = document.getElementById("status");
const btn = document.getElementById("btn");

function setStatus(text) {
  statusEl.textContent = text;
}

if (!tg) {
  setStatus("❌ Открой Mini App через кнопку в Telegram");
} else {
  tg.ready();
  tg.expand();

  const user = tg.initDataUnsafe?.user;
  setStatus(`✅ Mini App открыт. User: ${user?.first_name ?? "unknown"}`);

  btn.addEventListener("click", () => {
    tg.sendData(JSON.stringify({ type: "ping", ts: Date.now() }));
    tg.showAlert("Данные отправлены в бота");
  });
}
