import { images } from '../constants/'

const { reviewImage1, reviewImage2, reviewImage3, reviewImage4, reviewImage5, headerDemoImage } = images;

const dummyData = {
    Header: {
        title: "Asesor Profesional Solucion Ideal",
        subtitle: "Ayudamos a encontrar soluciones intuitivas de acuerdo con las metas de negocio del cliente. Proveemos servicios de alta calidad.",
        link : "youtube.com",
        image : headerDemoImage,
        reviewImage: [reviewImage1, reviewImage2, reviewImage3, reviewImage4, reviewImage5],
        review : 5
    }
}

export {
    dummyData
}