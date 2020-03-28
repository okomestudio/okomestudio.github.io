/* The following code is to map old param-based WordPress URLs to the current path-based URLs. */

var urlmap = {
  636: "2010/03/installing-hotpants-5-1-10-on-mac-os-x-leopard",
  824: "2010/03/installing-sextractor-on-mac-os-x-snow-leopard",
  986: "2010/06/testing-if-a-point-is-inside-a-polygon-in-python",
  1131: "2010/11/installing-f-lux-on-debian-squeeze",
  1834: "2012/09/using-japanese-on-debian-wheezy",
  2292: "2014/04/pca-and-biplot-using-python",
  2357: "2014/05/brand-positioning-by-correspondence-analysis",
  2375: "2014/05/interpreting-ab-test-using-python",
  2536: "2014/10/installing-adobe-reader-on-debianjessie",
  2583: "2014/11/install-google-chrome-on-debian-jessie",
};

var query = window.location.search.substring(1);
var vars = query.split('&');

for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');
  if (decodeURIComponent(pair[0]) == "p") {
    var article_id = decodeURIComponent(pair[1]);
    if (article_id in urlmap) {
      window.location.replace(
        urlmap[article_id] + "/"
      );
    };
  };
};


/* "https://okomestudio.net/biboroku/" + urlmap[article_id] + "/" */
