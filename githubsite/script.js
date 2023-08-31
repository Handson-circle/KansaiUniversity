// script.js
function vote(option) {
    const votesElement = document.getElementById(`votes-${option}`);
    let votes = parseInt(votesElement.innerText);
    
    const votedOption = localStorage.getItem('votedOption');
    
    if (!votedOption) {
        localStorage.setItem('votedOption', option);
        votesElement.innerText = votes + 1;
        
        sendVoteToServer(option);
    } else {
        alert('You have already voted.');
    }
}

function updateVotes() {
    // サーバーサイドから投票情報を取得する場合のコードは省略
    const votesData = { option1: 15, option2: 8 }; // 仮のデータ
    
    Object.keys(votesData).forEach(option => {
        const votesElement = document.getElementById(`votes-${option}`);
        if (votesElement) {
            votesElement.innerText = votesData[option];
        }
    });
}

function sendVoteToServer(option) {
    // サーバーサイドに投票情報を送信するコードを実装する
    // この関数内で適切なAPIリクエストを行う必要がある
}

// 初期状態で投票数を更新
updateVotes();

// 定期的に投票数を更新
setInterval(updateVotes, 5000); // 5秒ごとに投票結果を更新
