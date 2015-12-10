$(function() {
  $('#widget').draggable();

  $( '.square' ).draggable({
    revertDuration: 500,
    containment: ".side-back",
    appendTo: $(window),
    snapMode: "inner",
    snapTolerence: 100
  });

  // var $clone_instance = $('.square').clone();

  // $clone_instance.addClass('square_instance');

  $( '.side-back' ).droppable({
    drop: function( event, ui ) {
      console.log('this');
      $( this )
        .addClass( "ui-state-highlight" )
        .find( "p" )
          .addClass( ".tap-icon" );
    }
  });
});


// for each static square there is an equiv draggable square on top
// .draggable
// when clicked the staic square will clone itself to initial position
// draggable clicked square will either place in droppable or die

// if an already placed draggable square is reclicked it will not die, be draggable, or have the icon option to delete.