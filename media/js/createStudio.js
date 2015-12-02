var pieces = [
  {
    filename: "media/img/square-blue.png",
    correct_x: 100,
    correct_y: 100,
  },
  {
    filename: "media/img/square-yellow.png",
    correct_x: 300,
    correct_y: 100
  },
  {
    filename: "media/img/square-red.png",
    correct_x: 500,
    correct_y: 100
  },
  {
    filename: "media/img/square-blue.png",
    correct_x: 100,
    correct_y: 100,
  },
  {
    filename: "media/img/square-yellow.png",
    correct_x: 300,
    correct_y: 100
  },
  {
    filename: "media/img/square-red.png",
    correct_x: 500,
    correct_y: 100
  },  {
    filename: "media/img/square-blue.png",
    correct_x: 100,
    correct_y: 100,
  },
  {
    filename: "media/img/square-yellow.png",
    correct_x: 300,
    correct_y: 100
  },
  {
    filename: "media/img/square-red.png",
    correct_x: 500,
    correct_y: 100
  }
]

window.addEventListener("load", function() {

  var $pieceBeingDragged;
  var pieceBeginLeft,
    pieceBeginTop,
    mouseBeginLeft,
    mouseBeginTop;

  var startDrag = function() {
    // console.log("startDrag", this);

    event.preventDefault();

    // note which DOM element should be moving
    $pieceBeingDragged = this;

    // note where the piece DOM element started it's journey
    pieceBeginLeft = parseInt($pieceBeingDragged.style.left);
    pieceBeginTop  = parseInt($pieceBeingDragged.style.top);

    // note where the mouse started it's journey
    mouseBeginLeft = event.clientX;
    mouseBeginTop  = event.clientY;

  }

  var movePiece = function() {
    //console.log("movePiece", $pieceBeingDragged);

    //figure out how far the mouse has moved since mousedown
    var distanceLeft = event.clientX - mouseBeginLeft;
    var distanceTop = event.clientY - mouseBeginTop;

    // if there is a piece currently being dragged
    if ($pieceBeingDragged) {
      // moved it to it's start position, plus the distance themouse has moved
      $pieceBeingDragged.style.left = pieceBeginLeft + distanceLeft + "px";
      $pieceBeingDragged.style.top = pieceBeginTop + distanceTop + "px";
    }

    // console.log(distanceLeft, distanceTop);
  }

  var stopDrag = function() {
    // console.log("stopDrag", $pieceBeingDragged);
    // console.log($pieceBeingDragged.style.left, $pieceBeingDragged.style.top);
    // console.log($pieceBeingDragged.getAttribute("data-correct-x"), $pieceBeingDragged.getAttribute("data-correct-y"));

    if ( parseInt($pieceBeingDragged.style.left) < parseInt($pieceBeingDragged.getAttribute("data-correct-x")) + 20 &&
      parseInt($pieceBeingDragged.style.left) > parseInt($pieceBeingDragged.getAttribute("data-correct-x")) - 20 &&
      parseInt($pieceBeingDragged.style.top) < parseInt($pieceBeingDragged.getAttribute("data-correct-y")) + 20 &&
      parseInt($pieceBeingDragged.style.top) > parseInt($pieceBeingDragged.getAttribute("data-correct-y")) - 20
      ) {

      console.log("match");
      $pieceBeingDragged.className = "piece correct";
      // snap
      $pieceBeingDragged.getAttribute("data-correct-x");
      $pieceBeingDragged.getAttribute("data-correct-y");

      // remove event listener
      $pieceBeingDragged.removeEventListener('mousedown', startDrag);

      // turn off drop shadow

      $pieceBeingDragged.addEventListener("mousedown", beDefault);

      checkForWin();

    }

    $pieceBeingDragged = null;


  }

  var checkForWin = function() {
    var $pieces = document.querySelectorAll(".piece");
    var $correct = document.querySelectorAll(".correct");

    if ($pieces.length == $correct.length) {
      alert("you win!");
    }
  }

  for (var i = pieces.length - 1; i >= 0; i--) {

    var $newPiece = document.createElement("img");
    $newPiece.setAttribute("src", pieces[i].filename);
    $newPiece.setAttribute("class", "piece");
    $newPiece.style.left = "200px";
    $newPiece.style.top  ="200px";
    $newPiece.setAttribute( "data-correct-x", pieces[i].correct_x );
    $newPiece.setAttribute( "data-correct-y", pieces[i].correct_y );

    document.body.appendChild( $newPiece );

    $newPiece.addEventListener("mousedown", startDrag);

  };

  window.addEventListener("mousemove", movePiece);
  window.addEventListener("mouseup", stopDrag);

  function beDefault() {
    event.preventDefault();
  };

});
