// ナビゲーションメニューのハンバーガーメニュー（モバイルデバイス向け）の制御
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
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

// イベント情報を表示するための関数
function displayEvents() {
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = ''; // 既存の内容をクリア

    eventsData.forEach((event) => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description}</p>
        `;
        eventList.appendChild(eventItem);
    });
}

// ページ読み込み時にイベント情報を表示
displayEvents();
