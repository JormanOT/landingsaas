import { images } from '../constants'
const ASSETS = import.meta.env.VITE_S3_URL;

const VerifyImage = (image) => {
    return (image !== null && image !== undefined) ? `${ASSETS}/${image}` : images.noImage;
}

export default VerifyImage;