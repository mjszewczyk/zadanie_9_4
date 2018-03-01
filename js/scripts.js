// funkcja rysująca choinkę
// przyjmuje jako argument wysokość choinki
function drawTree(n) {
    // przygotowujemy liczbę spację potrzebną w pierwszym wierszu
    var spacesCount = n - 1;
    var spaces = '';
    for (var i = 0; i < spacesCount; i++) {
        spaces += ' ';
    }
    // pętla rysująca choinkę
    for (var i = 0; i < n; i++){
        var star = '*';
        // pętla wyznaczająca liczbę gwiazdek w danym wierszu
        for (var j = 0; j < i; j++) {
            star += '**';
        }
        console.log(spaces + star);
        // wiemy że w każdym kolejnym wierszu potrzebujemy o 1 spacje mniej, dlatego ją usuwamy
        spaces = spaces.substr(0, spaces.length - 1);
    }
}

var h = prompt('Podaj wysokość choinki');

drawTree(h);


