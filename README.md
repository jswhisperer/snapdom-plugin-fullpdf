# snapdom full pdf plugin

A [SnapDOM](https://github.com/zumerlab/snapdom) plugin that renders a webpage as a pdf with selectable text and links via [html2pdf.js](https://ekoopmans.github.io/html2pdf.js)

## Install

```bash
# npm coming soon....
clone https://github.com/jswhisperer/snapdom-plugin-fullpdf
```

```js
import { snapdom } from '@zumer/snapdom'
import { html2pdfSnap } from 'snapdom-html2pdf-plugin'
snapdom.plugins([html2pdfSnap, { opts }])

const capture = document.getElementById("capture")
await result.toHtml2pdfSnap({ element: capture, html2pdfSnap })
```

## Options

[html2pdf docs](https://ekoopmans.github.io/html2pdf.js/#options)

| Name        | Type            | Default                         | Description                                                                                                                                               |
| ----------- | --------------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| margin      | number or array | `0`                             | PDF margin (in jsPDF units). Can be a single number, `[vMargin, hMargin]`, or `[top, left, bottom, right]`.                                               |
| filename    | string          | `'file.pdf'`                    | The default filename of the exported PDF.                                                                                                                 |
| pagebreak   | object          | `{mode: ['css', 'legacy']}`     | Controls the pagebreak behaviour on the page. See [Page-breaks](https://ekoopmans.github.io/html2pdf.js/#page-breaks) below.                              |
| image       | object          | `{type: 'jpeg', quality: 0.95}` | The image type and quality used to generate the PDF. See [Image type and quality](https://ekoopmans.github.io/html2pdf.js/#image-type-and-quality) below. |
| enableLinks | boolean         | `true`                          | If enabled, PDF hyperlinks are automatically added ontop of all anchor tags.                                                                              |
| html2canvas | object          | `{ }`                           | Configuration options sent directly to `html2canvas` ([see here](https://html2canvas.hertzen.com/configuration) for usage).                               |
| jsPDF       | object          | `{ }`                           | Configuration options sent directly to `jsPDF` ([see here](http://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html) for usage).                              |

## License

MIT
