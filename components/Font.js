import FontFaceObserver from 'fontfaceobserver';

const Font = () => {
    const link = document.createElement('link')
    link.href = 'https://fonts.googleapis.com/css?family=Montserrat&display=swap'
    link.rel = 'stylesheet'
    link.crossOrigin = 'anonymous'

    document.head.appendChild(link)

    const Montserrat = new FontFaceObserver('Montserrat')

    Montserrat.load().then(() => {
        document.documentElement.classList.add('Montserrat')
    })
}

export default Font;