document.addEventListener('DOMContentLoaded', () => {

    const userData = {
      //  "userName": "",
        "TotalCount": "",
    }

    const board = [
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0,
    ]

    console.log(board)

    function drawBoard4X4(){
        const boardElement = document.querySelector('.game__container');
        boardElement.innerHTML = '';
    }
})