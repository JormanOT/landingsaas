import headerServices from './header.services'
import companyServices from './company.services'

const axiosParams = ({ method, header = null, route, body = null }) => {
    return {
        method: method,
        url: route,
        headers: { "Content-Type": 'multipart/form-data' },
        data: body
    }
}

const DashboardServices = {
    header: headerServices(axiosParams),
    company : companyServices(axiosParams)
}

export default DashboardServices;