let faFontPath =
  chrome.extension.getURL('/fonts/fontawesome-webfont.woff2?v=4.7.0')

let includeFaFonts = `
  <style>
    @font-face {
      font-family: 'FontAwesome';
      src:url('${faFontPath}')format('woff2');
      font-weight:normal;
      font-style:normal;
    }
  </style>`

$('head').append(includeFaFonts)
