import html2pdf from 'html2pdf.js'

export function html2pdfSnap(options = {}) {
    return {
        name: 'html2pdfSnap',
        defineExports() {
            return {
                html2pdfSnap: async (ctx, opts = {}) => {
                    const captureEl =
                        opts.element || document.querySelector('body')
                    const runtime =
                        opts.html2pdf && typeof opts.html2pdf === 'object'
                            ? opts.html2pdf
                            : {}

                    if (captureEl) {
                        try {
                            await html2pdf()
                                .set({ ...options, ...runtime })
                                .from(bodyElement)
                                .save()
                        } catch (e) {
                            console.error(e)
                        }
                    }
                },
            }
        },
    }
}

export default html2pdfSnap
