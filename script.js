document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. 滾動淡入動畫 (Scroll Fade-in Animation) ---
    // 抓取所有帶有 fade-in class 的元素
    const fadeElements = document.querySelectorAll('.fade-in');

    // 設定觀察器：當元素進入畫面 15% 時觸發
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                // 為元素加上 visible class 來觸發 CSS 動畫
                entry.target.classList.add('visible');
                // 動畫播完就停止觀察該元素，節省效能
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 讓觀察器開始觀察每一個元素
    fadeElements.forEach(element => {
        appearOnScroll.observe(element);
    });

    // --- 2. 下載按鈕友善提示 ---
    const downloadGameBtn = document.getElementById("downloadGame");
    const downloadDocBtn = document.getElementById("downloadDoc");

    const handleDownloadClick = (e, itemName) => {
        // 如果你的 href 尚未準備好真實檔案，可以先取消註解下面這行防止跳轉
        // e.preventDefault(); 
        alert(`感謝您下載 ${itemName}！`);
    };

    if (downloadGameBtn) {
        downloadGameBtn.addEventListener("click", (e) => handleDownloadClick(e, "遊戲執行檔"));
    }

    if (downloadDocBtn) {
        downloadDocBtn.addEventListener("click", (e) => handleDownloadClick(e, "完整企劃書"));
    }
});