// ナビゲーションメニューのハンバーガーメニュー（モバイルデバイス向け）の制御
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.querySelector('.mobile-nav');

navToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('show');
    // アクセシビリティのための属性を追加
    const isOpen = mobileNav.classList.contains('show');
    navToggle.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
});

// イベント情報のダミーデータ（仮のデータ）
const eventsData = [
    {
        title: 'ボランティア活動1',
        date: '2023-09-10',
        location: '大阪市',
        description: 'ボランティア活動の詳細説明1。',
    },
    {
        title: 'ボランティア活動2',
        date: '2023-09-15',
        location: '京都市',
        description: 'ボランティア活動の詳細説明2。',
    },
    // 他のイベントデータも追加できます。
];

// イベント情報をスライドシ
