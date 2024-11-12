function rollDice() {
    const diceType = document.getElementById('dice-type').value;
    const customDice = parseInt(document.getElementById('custom-dice').value, 10);
    const diceQuantity = parseInt(document.getElementById('dice-quantity').value, 10);
    const modifier = parseInt(document.getElementById('modifier').value, 10);
    let dice = diceType;

    if (!isNaN(customDice) && customDice > 1) {
        dice = customDice;
    }

    let results = [];
    if (diceType === 'coin') {
        results = Array.from({ length: diceQuantity }, () => Math.random() < 0.5 ? 'Cara' : 'Coroa');
    } else {
        results = Array.from({ length: diceQuantity }, () => Math.floor(Math.random() * dice) + 1);
    }

    const totalResult = diceType === 'coin' ? results.join(', ') : results.reduce((a, b) => a + b, 0) + modifier;

    const rollResult = `Resultado: ${results.join(', ')}${diceType !== 'coin' ? ` + Modificador: ${modifier} = Total: ${totalResult}` : ''}`;
    document.getElementById('result').innerText = rollResult;

    const history = document.getElementById('history');
    const historyItem = document.createElement('li');
    const currentDate = new Date().toLocaleString();
    historyItem.textContent = `${currentDate} - ${rollResult}`;
    history.appendChild(historyItem);
}
