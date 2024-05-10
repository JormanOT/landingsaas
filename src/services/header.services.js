const headerServices = (axiosParams) => {
    return {
        getHeader: (id) => {
            return axiosParams({
                method: 'GET',
                route: `api/v1/header/${id}`
            });
        },
        setHeader: (data) => {
            return axiosParams({
                method: 'POST',
                route: 'api/v1/header',
                body: data
            });
        },
        uploadReviewImages: (data) => {
            return axiosParams({
                method: 'POST',
                route: 'api/v1/header/reviewimages',
                body: data
            });
        },
        uploadHeroImage: (data) => {
            return axiosParams({
                method: 'POST',
                route: 'api/v1/header/heroimage',
                body: data
            });
        }
    }
}
export default headerServices;