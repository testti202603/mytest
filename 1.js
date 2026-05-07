function getNowTime() {
  const now = new Date();
  const y = now.getFullYear();
  const m = (now.getMonth() + 1).toString().padStart(2, '0');
  const d = now.getDate().toString().padStart(2, '0');
  const h = now.getHours().toString().padStart(2, '0');
  const mi = now.getMinutes().toString().padStart(2, '0');
  const s = now.getSeconds().toString().padStart(2, '0');
  return `${y}-${m}-${d} ${h}:${mi}:${s}`;
}

// 每秒打印一次
setInterval(() => {
  console.log(getNowTime());
}, 1000);
