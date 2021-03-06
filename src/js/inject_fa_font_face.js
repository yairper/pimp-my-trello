injectFAFontFace = function () {
  let faFontPath =
    chrome.extension.getURL('/src/fonts/fontawesome-webfont.woff2?v=4.7.0')

  let includeFaFonts =
    a.style.html(`
      @font-face {
        font-family: 'FontAwesome';
        src:url('${faFontPath}')format('woff2');
        font-weight:normal;
        font-style:normal;
      }
    `)

  document.querySelector('head').appendChild(includeFaFonts)
}
