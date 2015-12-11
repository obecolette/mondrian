

$(function() {
  $('#widget').draggable();



  $( '.square' ).draggable({
    revertDuration: 500,
    containment: ".side-back",
    scroll: false,
    // appendTo: $(window),
    // snapMode: "inner",
    snapTolerence: 100,
    start: function(event, ui) {
      console.log("dragging started");
      $(ui.helper).clone(true).insertAfter( ui.helper );
      containment: ".side-back"
    }
  });

  $( '.side-back' ).droppable({
    hoverClass: '.border',
    drop: function( event, ui ) {
      console.log('this');
      // $( this )
      //   .addClass( "ui-state-highlight" )
      //   .find( "p" )
      //     .addClass( ".tap-icon" );
    }
  });
});


// for each static square there is an equiv draggable square on top
// when clicked the staic square will clone itself to initial position
// draggable clicked square will either place in droppable or die
// if an already placed draggable square is reclicked it will not die, be draggable, or have the icon option to delete.