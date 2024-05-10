const companyServices = (axiosParams) => {
    return {
        getCompany: (id) => {
            return axiosParams({
                method: 'GET',
                route: `api/v1/company/${id}`
            });
        },
        setCompany: (data) => {
            return axiosParams({
                method: 'POST',
                route: 'api/v1/company',
                body: data
            });
        },
        uploadLogo: (data) => {
            return axiosParams({
                method: 'POST',
                route: 'api/v1/company/logo',
                body: data
            });
        }
    }
}
export default companyServices;