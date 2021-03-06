(function(){
  // Load some sound effects right away
  var audioShowHide = new Audio('show-hide.ogg');
  // jQuery.fn.text
  var jqText = jQuery.fn.text;
  jQuery.fn.text = function(){
    arguments[0] = 'Poop ' + arguments[0];
    jqText.apply( this, arguments );
  };
  // jQuery.fn.addClass
  var jqAddClass = jQuery.fn.addClass;
  jQuery.fn.addClass = function(){
    arguments[0] = 'poop ' + arguments[0];
    jqAddClass.apply( this, arguments );
  };
  // jQuery.fn.removeClass
  var jqRemoveClass = jQuery.fn.removeClass;
  jQuery.fn.removeClass = function(){
    jqAddClass.apply( this, ['poop '] );
    jqRemoveClass.apply( this, arguments );
  };
  // jQuery.fn.prepend
  var jqPrepend = jQuery.fn.prepend;
  jQuery.fn.prepend = function(){
    jqPrepend.apply( this, arguments );
    jqPrepend.apply( this, [' poop '] );
  };
  // jQuery.fn.append
  var jqAppend = jQuery.fn.append;
  jQuery.fn.append = function(){
    jqAppend.apply( this, ['Poop '] );
    jqAppend.apply( this, arguments );
  };
  // jQuery.fn.show
  var jqShow = jQuery.fn.show;
  jQuery.fn.show = function(){
    audioShowHide.play();
    jqShow.apply( this, arguments );
  };
  // jQuery.fn.hide
  var jqHide = jQuery.fn.hide;
  jQuery.fn.hide = function(){
    audioShowHide.play();
    jqHide.apply( this, arguments );
  };
  // jQuery.fn.slideUp
  var jqSlideUp = jQuery.fn.slideUp;
  jQuery.fn.slideUp = function(){
    audioShowHide.play();
    jqSlideUp.apply( this, arguments );
  };
  // jQuery.fn.slideDown
  var jqSlideDown = jQuery.fn.slideDown;
  jQuery.fn.slideDown = function(){
    audioShowHide.play();
    jqSlideDown.apply( this, arguments );
  };
})();
