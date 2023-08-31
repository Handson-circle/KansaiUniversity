function vote(option) {
    const votesElement = document.getElementById(`votes-${option}`);
    let votes = parseInt(votesElement.innerText);
    
    const votedOption = localStorage.getItem('votedOption');
    
    if (!votedOption) {
        localStorage.setItem('votedOption', option);
        votesElement.innerText = votes + 1;
        
        // サーバーサイドへ投票情報を送信する必要がある場合、ここで行う
        // 仮のコード例：APIに投票情報を送信する
        sendVoteToServer(option);
    } else {
        alert('You have already voted.');
    }
}

function updateVotes() {
    const votesElements = document.querySelectorAll('[id^="votes-"]');
    
    // サーバーサイドから投票情報を取得する必要がある場合、ここで行う
    // 仮のコード例：APIから投票結果データを取得して表示を更新
    const votesData = { option1: 10, option2: 5 }; // 仮のデータ
    
    votesElements.forEach(element => {
        const option = element.id.split('-')[1];
        element.innerText = votesData[`option${option}`];
    });
}

setInterval(updateVotes, 5000); // 5秒ごとに投票結果を更新

function sendVoteToServer(option) {
    // サーバーサイドに投票情報を送信するコードを実装する
    // この関数内で適切なAPIリクエストを行う必要がある
}
