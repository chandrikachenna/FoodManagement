import {AuthAPI} from '../services/AuthService/AuthAPI.fixture'
import { AuthStore } from './AuthStore'
const authAPI = new AuthAPI()
const authStore = new AuthStore(authAPI)
export default { authStore }
