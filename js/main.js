var startPage = document.getElementById('startPage');

var frazesyStrona = document.getElementById('frazesyStrona');

var btnFrazesyPlay = document.getElementById('frazesyPlay');








var arrAll = [startPage,  frazesyStrona];

var arrShow = [];

arrShow[0] = [startPage];

arrShow[12] = [frazesyStrona];





function showComp(par) {
    for (i = 0; i < arrAll.length; i++) {
        arrAll[i].style.display = 'none'
    }
    for (i = 0; i < arrShow.length; i++) {
        if (i == par) {
            for (j = 0; j < arrShow[i].length; j++) {
                arrShow[i][j].style.display = 'block';

            }
        }
    }
};

btnFrazesyPlay.onclick = function () {
    console.log('ok');
    showComp(12);
}

