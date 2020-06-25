import {UpdateUserRequest,GetAuthResponse} from '../../stores/types'

interface AuthService {
    signInAPI: (
      requestObject: UpdateUserRequest
    ) => Promise<GetAuthResponse>
}

export default AuthService