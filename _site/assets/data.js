/**
 * Created by trhoanglee on 6/2/16.
 */
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = decodeURIComponent(window.location.search.substring(1)),
      sURLVariables = sPageURL.split('&'),
      sParameterName,
      i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};

var searchProduct = function (query) {
  //filter();
  //sort();
  //paging();
  $.getJSON("/data/products.json", function(data) {
    $.each(data, function (key, value) {
      $('#result').append("<p>" + data[key].name + query + "</p>")
    });
  });
}

$('document').ready(function () {
  var searchQuery = getUrlParameter('q');
  if (searchQuery) {
    searchQuery = searchQuery.replace(/\+/g, " ");
    $('#search-box').val(searchQuery);
    searchProduct(searchQuery);
  }
});
