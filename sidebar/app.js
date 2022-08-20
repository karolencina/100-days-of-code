const toggleBtn = document.querySelector('.sidebar-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.btn-close');

toggleBtn.addEventListener('click', function() {
    console.log(toggleBtn.classList);
    toggleBtn.classList.toggle('btn-toggled');
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', function () {
    if (sidebar.classList.contains('show-sidebar')) {
        sidebar.classList.remove('show-sidebar')
    }
});