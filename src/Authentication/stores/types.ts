export interface UpdateUserRequest {
    name: string
    password: string
  }

export interface GetAuthResponse {
    access_token:string
    role: string
  }