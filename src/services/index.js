const axiosParams = ({ method, header = null, route, body = null }) => {
    return {
        method: method,
        url: route,
        headers: { "Content-Type": 'multipart/form-data' },
        data: body
    }
}

const DashboardServices = {
    getHeader: (id) => {
        return axiosParams({ method: 'GET', route: `api/v1/header/${id}` });
    },
    setHeader: (data) => {
        return axiosParams({ method: 'POST', route: 'api/v1/header', body: data });
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

export default DashboardServices;