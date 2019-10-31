//Fukcja odpowiedzialna za wybór 
function getMoveName(argMoveId) {
    if (argMoveId == 1) {
        return 'kamień';
    } else if (argMoveId == 2) {
        return 'papier';
    } else if (argMoveId == 3) {
        return 'nożyce';
    }
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
}


//Funkcja wyświetla wynik gry
function displayResult(argComputerMove, argPlayerMove) {
    if (argComputerMove == argPlayerMove) {
        return 'remis';
    } else if (argPlayerMove == 'nieznany ruch') {
        return 'nieznany ruch';
    } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
        return 'Ty wygrywasz!';
    } else {
        return 'Wygrałem!!!'
    }
}

//Losowanie, przypisanie oraz wyświetlenie wyboru komputera  
let randomNumber = Math.floor(Math.random() * 3 + 1);
let computerMove = getMoveName(randomNumber);
printMessage('Mój ruch to: ' + computerMove);

//Wybranie, przypisanie oraz wyświetlenie wyboru gracza
let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');
let playerMove = getMoveName(playerInput);
printMessage('Twój ruch to: ' + playerMove);


//Wyświetlenie wyniku rozgrywki
printMessage(displayResult(computerMove, playerMove));