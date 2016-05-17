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

$('document').ready(function () {
   var searchQuery = getUrlParameter('search');
   if (searchQuery) {
      $('#search-form-jplist').val(searchQuery);
      $('#search-box').val(searchQuery);
      $('.search-query').text("'" + searchQuery.toString() + "'");
   }
   $('#demo').jplist({
      itemsBox: '.list'
      , itemPath: '.list-item'
      , panelPath: '.jplist-panel'
   });
});