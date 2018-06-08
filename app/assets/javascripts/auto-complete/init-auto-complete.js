$(document).ready(function() {
  const selects = document.querySelectorAll('select');
  $.each(selects, function(index, select) {
    accessibleAutocomplete.enhanceSelectElement({
      selectElement: select,
      source: function(query, populateResults) {
        var minQueryLength = 2;
        if (query.length < minQueryLength) {
          return null;
        }
        var options = Array.from(select.options).map(function(opt){
          return opt.value;
        });
        var startingWithLetter = _.remove(options, function(opt) {
          return opt.match(new RegExp('^' + query + '.+', 'i'));
        });
        var containingLetter = _. remove(options, function(opt) {
          return opt.match(new RegExp('^.+' + query + '+', 'i'));
        });
        return populateResults([...startingWithLetter, ...containingLetter]);
      }
    });
  });
});
