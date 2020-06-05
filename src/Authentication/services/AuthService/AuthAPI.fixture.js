import getUserSignInResponse from '../../fixtures/getUserSignInResponse.json'

class AuthAPI {
   signInAPI() {
      return new Promise((resolve, reject) => {
         resolve(getUserSignInResponse)
      })
   }
}

export { AuthAPI }
