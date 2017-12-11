(function($){
  $(function(){

    $('.userHtml>table').addClass('striped');

  }); // end of document ready
})(jQuery); // end of jQuery name space

(function() {
  hljs.initHighlightingOnLoad();
  renderMathInElement(document.body, {
    delimiters: [
      {left: "\\[", right: "\\]", display: true},
      {left: "\\(", right: "\\)", display: false}
    ]
  });
})();
