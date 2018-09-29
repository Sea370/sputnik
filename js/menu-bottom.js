window.addEventListener('DOMContentLoaded', function() {

document.getElementById('menu-bottom').innerHTML = 
'<nav class="bar bar-tab"><a class="tab-item active" href="index.html" data-ignore="push"><span class="icon icon-home"></span><span class="tab-label">Главная</span></a>' +
//'<a class="tab-item" href="profile.html" data-ignore="push"><span class="icon icon-person"></span><span class="tab-label">Профиль</span></a>' +
'<a class="tab-item" href="routelist.html" data-ignore="push"><span class="icon icon-list"></span></span><span class="tab-label">Список</span></a>' +
'<a class="tab-item" href="routenew.html" data-ignore="push"><span class="icon icon-compose"></span><span class="tab-label">Новый</span></a>' +
'<a class="tab-item" href="settings.html" data-ignore="push"><span class="icon icon-gear"></span><span class="tab-label">Настройки</span></a></nav>'});