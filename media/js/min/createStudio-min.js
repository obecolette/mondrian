var pieces = [ {
    filename: "media/img/square-blue.png",
    correct_x: 100,
    correct_y: 100
}, {
    filename: "media/img/square-yellow.png",
    correct_x: 300,
    correct_y: 100
}, {
    filename: "media/img/square-red.png",
    correct_x: 500,
    correct_y: 100
}, {
    filename: "media/img/square-blue.png",
    correct_x: 100,
    correct_y: 100
}, {
    filename: "media/img/square-yellow.png",
    correct_x: 300,
    correct_y: 100
}, {
    filename: "media/img/square-red.png",
    correct_x: 500,
    correct_y: 100
}, {
    filename: "media/img/square-blue.png",
    correct_x: 100,
    correct_y: 100
}, {
    filename: "media/img/square-yellow.png",
    correct_x: 300,
    correct_y: 100
}, {
    filename: "media/img/square-red.png",
    correct_x: 500,
    correct_y: 100
} ];

window.addEventListener("load", function() {
    var $pieceBeingDragged;
    var pieceBeginLeft, pieceBeginTop, mouseBeginLeft, mouseBeginTop;
    var startDrag = function() {
        event.preventDefault();
        $pieceBeingDragged = this;
        pieceBeginLeft = parseInt($pieceBeingDragged.style.left);
        pieceBeginTop = parseInt($pieceBeingDragged.style.top);
        mouseBeginLeft = event.clientX;
        mouseBeginTop = event.clientY;
    };
    var movePiece = function() {
        var distanceLeft = event.clientX - mouseBeginLeft;
        var distanceTop = event.clientY - mouseBeginTop;
        if ($pieceBeingDragged) {
            $pieceBeingDragged.style.left = pieceBeginLeft + distanceLeft + "px";
            $pieceBeingDragged.style.top = pieceBeginTop + distanceTop + "px";
        }
    };
    var stopDrag = function() {
        if (parseInt($pieceBeingDragged.style.left) < parseInt($pieceBeingDragged.getAttribute("data-correct-x")) + 20 && parseInt($pieceBeingDragged.style.left) > parseInt($pieceBeingDragged.getAttribute("data-correct-x")) - 20 && parseInt($pieceBeingDragged.style.top) < parseInt($pieceBeingDragged.getAttribute("data-correct-y")) + 20 && parseInt($pieceBeingDragged.style.top) > parseInt($pieceBeingDragged.getAttribute("data-correct-y")) - 20) {
            console.log("match");
            $pieceBeingDragged.className = "piece correct";
            $pieceBeingDragged.getAttribute("data-correct-x");
            $pieceBeingDragged.getAttribute("data-correct-y");
            $pieceBeingDragged.removeEventListener("mousedown", startDrag);
            $pieceBeingDragged.addEventListener("mousedown", beDefault);
            checkForWin();
        }
        $pieceBeingDragged = null;
    };
    var checkForWin = function() {
        var $pieces = document.querySelectorAll(".piece");
        var $correct = document.querySelectorAll(".correct");
        if ($pieces.length == $correct.length) {
            alert("you win!");
        }
    };
    for (var i = pieces.length - 1; i >= 0; i--) {
        var $newPiece = document.createElement("img");
        $newPiece.setAttribute("src", pieces[i].filename);
        $newPiece.setAttribute("class", "piece");
        $newPiece.style.left = "200px";
        $newPiece.style.top = "200px";
        $newPiece.setAttribute("data-correct-x", pieces[i].correct_x);
        $newPiece.setAttribute("data-correct-y", pieces[i].correct_y);
        document.body.appendChild($newPiece);
        $newPiece.addEventListener("mousedown", startDrag);
    }
    window.addEventListener("mousemove", movePiece);
    window.addEventListener("mouseup", stopDrag);
    function beDefault() {
        event.preventDefault();
    }
});