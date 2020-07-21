/* The following code is to map old param-based WordPress URLs to the current path-based URLs. */

var urlmap = {
  291: '2009/03/formatting-a-usb-drive-for-use-with-debian',
  636: '2010/03/installing-hotpants-5-1-10-on-mac-os-x-leopard',
  719: '2010/03/installing-fftw-on-mac-os-x-snow-leopard',
  722: '2010/03/installing-atlas-on-mac-os-x-snow-leopard',
  754: '2010/03/customizing-installing-linux-kernel-on-debian-squeeze',
  816: '2010/03/installing-squid-proxy-server-on-mac-os-x-snow-leopard',
  824: '2010/03/installing-sextractor-on-mac-os-x-snow-leopard',
  827: '2010/03/installing-gfortran-on-mac-os-x-snow-leopard',
  856: '2010/06/installing-debian-squeeze-amd64-on-lenovo-t410s',
  931: '2010/06/installing-kindle-for-pc-on-debian-squeeze',
  986: '2010/06/testing-if-a-point-is-inside-a-polygon-in-python',
  1009: '2010/10/installing-bruzual-charlot-2003-galaxev-on-debian-squeeze',
  1131: '2010/11/installing-f-lux-on-debian-squeeze',
  1386: '2010/12/installing-debian-squeeze-from-hard-disk',
  1646: '2011/02/half-light-radius-and-disk-scale-length-in-exponential-profile',
  1748: '2012/05/installing-ubuntu-12-04-lts-64-bit-from-an-iso-image-on-hard-drive',
  1768: '2012/06/searching-for-nearest-neighbors-between-two-coordinate-catalogs',
  1834: '2012/09/using-japanese-on-debian-wheezy',
  1868: '2012/09/installing-firefox-on-debian-wheezy',
  1903: '2012/09/customizing-installing-linux-kernel-on-debian-wheezy',
  1986: '2014/02/installing-debian-wheezy-from-a-usb-stick',
  2041: '2014/04/a-trick-for-computing-the-sum-of-geometric-series',
  2065: '2014/04/near-duplicate-detection-using-minhash-background',
  2292: '2014/04/pca-and-biplot-using-python',
  2357: '2014/05/brand-positioning-by-correspondence-analysis',
  2375: '2014/05/interpreting-ab-test-using-python',
  2536: '2014/10/installing-adobe-reader-on-debianjessie',
  2583: '2014/11/install-google-chrome-on-debian-jessie',
  2728: '2016/04/installing-debianjessie-on-thinkpad-t460s',
};

var query = window.location.search.substring(1);
var vars = query.split('&');

for (var i = 0; i < vars.length; i++) {
  var pair = vars[i].split('=');
  if (decodeURIComponent(pair[0]) == 'p') {
    var article_id = decodeURIComponent(pair[1]);
    if (article_id in urlmap) {
      window.location.replace(urlmap[article_id] + '/');
    }
  }
}

/* "https://okomestudio.net/biboroku/" + urlmap[article_id] + "/" */
