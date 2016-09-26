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
/*  var searchQuery = getUrlParameter('q');
  if (searchQuery) {
    searchQuery = searchQuery.replace(/\+/g, " ");
    $('#search-box').val(searchQuery);
    searchProduct(searchQuery);
  }*/
  $.getJSON("/data/autokeys.json", function (data) {
    $.each(data, function (key, value) {
      $('#car-keys').append(
          "<li class='list-item product ui-content'>" +
              "<a href='#" + data[key].name + "' data-rel='popup' class='ui-btn ui-btn-inline ui-corner-all' title='" + data[key].name + "'>" +
              "<span class='image'>" +
              "<img class='product-img' src='/images/car-keys/" + data[key].name + ".jpg" + "' onerror='this.src=\"/images/suakhoabmt-hinh-anh-minh-hoa.png\"'>" +
          "</span>" +
              "<h4 class='product-name'>" + data[key].name + "</h4>" +
          "<p class='product-price'>Liên hệ</p>" +
          "</a>" +
          "<div data-role='popup' id='" + data[key].name + "' class='ui-content'>" +
          "<p>This is a simple popup.</p>" +
      "</div>" +
          "</li>"
      );

    });
  });
});
