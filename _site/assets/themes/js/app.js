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

var vietnameseToLatinCharacter = function (string) {
  return string
      .replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a")
      .replace(/À|Á|Ả|Ã|Ạ|Ă|Ằ|Ắ|Ẳ|Ẵ|Ặ|Â|Ầ|Ấ|Ẩ|Ẫ|Ậ/g, "A")
      .replace(/è|é|ẻ|ẽ|ẹ|ê|ề|ế|ể|ễ|ệ/g, "e")
      .replace(/È|É|Ẻ|Ẽ|Ẹ|Ê|Ề|Ế|Ể|Ễ|Ệ/g, "E")
      .replace(/ì|í|ỉ|ĩ|ị/g, "i")
      .replace(/Ì|Í|Ỉ|Ĩ|Ị/g, "I")
      .replace(/ò|ó|ỏ|õ|ọ|ô|ồ|ố|ổ|ỗ|ộ|ơ|ờ|ớ|ở|ỡ|ợ/g, "o")
      .replace(/Ò|Ó|Ỏ|Õ|Ọ|Ô|Ồ|Ố|Ổ|Ỗ|Ộ|Ơ|Ờ|Ớ|Ở|Ỡ|Ợ/g, "O")
      .replace(/ù|ú|ủ|ũ|ụ|ư|ừ|ứ|ử|ữ|ự/g, "u")
      .replace(/Ù|Ú|Ủ|Ũ|Ụ|Ư|Ừ|Ứ|Ử|Ữ|Ự/g, "U")
      .replace(/ỳ|ý|ỷ|ỹ|ỵ/g, "y")
      .replace(/Ỳ|Ý|Ỷ|Ỹ|Ỵ/g, "Y")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
}

var specialCharacterToBlankSpace = function (string) {
  //TODO: Add more special character to set
  return string
      .replace(/,|.\/|>|<|\?|;|:|'|"|`|~|!|@|#|$|%|^|&|\*|\(|\)|_|-|=|\+|[|]|\\/g, " ");
}

var removeDuplicateWhiteSpaces = function (string) {
  return string.replace(/ +/g, " ");
}

$('document').ready(function () {
  var searchQuery = getUrlParameter('q');
  if (searchQuery) {
    searchQuery = searchQuery.replace(/\+/g, " ");
    $('#search-box').val(searchQuery);
    $('.search-query').text("'" + searchQuery.toString() + "'");
    searchQuery = vietnameseToLatinCharacter(
        removeDuplicateWhiteSpaces(
            specialCharacterToBlankSpace(searchQuery).trim()));

    $('#search-form-jplist').val(searchQuery);
  }
  $('#demo').jplist({
    itemsBox: '.list'
    , itemPath: '.list-item'
    , panelPath: '.jplist-panel'
  });
});