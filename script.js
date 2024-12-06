// 初始化Swiper轮播图
const swiper = new Swiper('.swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 获取弹出层元素
const modal = document.getElementById('weixinModal');
const btn = document.getElementById('weixinBtn');
const span = document.getElementsByClassName('close')[0];

// 点击微信图标时显示弹出层
btn.onclick = function(e) {
    e.preventDefault();
    modal.style.display = 'block';
}

// 点击 × 关闭弹出层
span.onclick = function() {
    modal.style.display = 'none';
}

// 点击弹出层外部区域关闭弹出层
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
} 