import axios from 'axios'

const baseConfig = {
  baseURL: `http://localhost/admin/api/`
}

const axiosInstance = axios.create(baseConfig)

export default axiosInstance
