{
    let compWin = 0;
    let playerWin = 0;

    //Główna funkcja
    const playGame = function (playerInput) {

        const playerWins = document.querySelector(".wins");
        const compWins = document.querySelector(".lose");

        clearMessages();

        //Fukcja odpowiedzialna za wybór 
        const getMoveName = function (argMoveId) {
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
        const displayResult = function (argComputerMove, argPlayerMove) {
            if (argComputerMove == argPlayerMove) {
                return 'remis';
            } else if (argPlayerMove == 'nieznany ruch') {
                return 'nieznany ruch';
            } else if ((argComputerMove == 'kamień' && argPlayerMove == 'papier') || (argComputerMove == 'papier' && argPlayerMove == 'nożyce') || (argComputerMove == 'nożyce' && argPlayerMove == 'kamień')) {
                playerWins.textContent = "Wygrałeś: " + ++playerWin;
                return 'Ty wygrywasz!';
            } else {
                compWins.textContent = "Wygrałem: " + ++compWin;
                return 'Wygrałem!!!';
            }
        }

        //Losowanie, przypisanie oraz wyświetlenie wyboru komputera  
        const randomNumber = Math.floor(Math.random() * 3 + 1);
        const computerMove = getMoveName(randomNumber);
        printMessage('Mój ruch to: ' + computerMove);

        //Wybranie, przypisanie oraz wyświetlenie wyboru gracza
        const playerMove = getMoveName(playerInput);
        printMessage('Twój ruch to: ' + playerMove);

        //Wyświetlenie wyniku rozgrywki
        printMessage(displayResult(computerMove, playerMove));

    }


    const btnRock = document.getElementById('play-rock');
    const btnPaper = document.getElementById('play-paper');
    const btnScissors = document.getElementById('play-scissors');

    btnRock.addEventListener('click', function () {
        playGame(1);
    });

    btnPaper.addEventListener('click', function () {
        playGame(2);
    });

    btnScissors.addEventListener('click', function () {
        playGame(3);
    });
}