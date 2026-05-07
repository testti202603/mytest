// 获取当前标准时间
function getNowTime() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // 补零：个位数前面加0
  const m = String(month).padStart(2, '0');
  const d = String(day).padStart(2, '0');
  const h = String(hour).padStart(2, '0');
  const mi = String(minute).padStart(2, '0');
  const s = String(second).padStart(2, '0');

  return `${year}-${m}-${d} ${h}:${mi}:${s}`;
}

// 调用
console.log(getNowTime());