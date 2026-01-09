// تحديث التوقيت الحي (اختياري)
function updateTime() {
    document.getElementById('current-time') && (document.getElementById('current-time').innerText = new Date().toLocaleString('ar-MA'));
}
setInterval(updateTime, 1000);
updateTime();