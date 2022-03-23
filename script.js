var player = null;
var winner = null;
var selectedPlayer = document.getElementById('selected-player');
var selectedWinner = document.getElementById('selected-winner');

changePlayer('X');

function chooseTile(id) {
    if(winner !== null) {
        return;
    }

    var tile = document.getElementById(id);

    if(tile.innerHTML !== '.')
        return;

    tile.innerHTML = player;
    tile.style.color = '#1d3557';

    if(player === 'X')
        player = 'O';
    else if(player === 'O')
        player = 'X';

    changePlayer(player);
    checkWinner();
}

function changePlayer(value) {
    player = value;
    selectedPlayer.innerHTML = player;
}

function changeWinner(value) {
    winner = value;
    selectedWinner.innerHTML = winner;
}

function checkWinner() {
    var tile1 = document.getElementById(1);
    var tile2 = document.getElementById(2);
    var tile3 = document.getElementById(3);
    var tile4 = document.getElementById(4);
    var tile5 = document.getElementById(5);
    var tile6 = document.getElementById(6);
    var tile7 = document.getElementById(7);
    var tile8 = document.getElementById(8);
    var tile9 = document.getElementById(9);
    if(checkRow(tile1, tile2, tile3)) {
        changeTileColor(tile1, tile2, tile3);
        changeWinner(tile1.innerHTML);
        return;
    }
    if(checkRow(tile4, tile5, tile6)) {
        changeTileColor(tile4, tile5, tile6);
        changeWinner(tile4.innerHTML);
        return;
    }
    if(checkRow(tile7, tile8, tile9)) {
        changeTileColor(tile7, tile8, tile9);
        changeWinner(tile7.innerHTML);
        return;
    }
    if(checkRow(tile1, tile4, tile7)) {
        changeTileColor(tile1, tile4, tile7);
        changeWinner(tile1.innerHTML);
        return;
    }
    if(checkRow(tile2, tile5, tile8)) {
        changeTileColor(tile2, tile5, tile8);
        changeWinner(tile2.innerHTML);
        return;
    }
    if(checkRow(tile3, tile6, tile9)) {
        changeTileColor(tile3, tile6, tile9);
        changeWinner(tile3.innerHTML);
        return;
    }
    if(checkRow(tile1, tile5, tile9)) {
        changeTileColor(tile1, tile5, tile9);
        changeWinner(tile1.innerHTML);
        return;
    }
    if(checkRow(tile3, tile5, tile7)) {
        changeTileColor(tile3, tile5, tile7);
        changeWinner(tile3.innerHTML);
        return;
    }
}

function checkRow(tile1, tile2, tile3) {
    var isAMatch = false;
    if(tile1.innerHTML !== '.' && tile1.innerHTML === tile2.innerHTML && tile2.innerHTML === tile3.innerHTML)
        isAMatch = true;
    
    return isAMatch;
}

function changeTileColor(tile1, tile2, tile3) {
    tile1.style.background = '#4b4';
    tile2.style.background = '#4b4';
    tile3.style.background = '#4b4';
}

function restart() {
    winner = null;
    selectedWinner.innerHTML = '';
    for (var i = 1; i <= 9; i++) {
        var tile = document.getElementById(i);
        tile.style.color = '#a8dadc';
        tile.style.background = '#a8dadc';
        tile.innerHTML = '.';
    }
}
