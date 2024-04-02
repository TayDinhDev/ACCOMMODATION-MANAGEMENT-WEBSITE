// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
<script>
    // Khi tải trang, chọn mục menu đầu tiên là active
    window.onload = function() {
        const firstMenuItem = document.querySelector('.list-unstyled.component li:first-child a');
    setActiveMenuItem(firstMenuItem);
    }

    function setActiveMenuItem(clickedItem) {
        const menuItems = document.querySelectorAll('.list-unstyled.component li');
        menuItems.forEach(item => item.classList.remove('active'));

    clickedItem.parentNode.classList.add('active');
    }
</script>
