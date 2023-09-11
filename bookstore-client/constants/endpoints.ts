export class USER_URL {
    PORT = 5000
    BASE_URL = `http://localhost:${this.PORT}/api/v1/`
    LOGIN = `${this.BASE_URL}auth/login`
    REGISTER = `${this.BASE_URL}auth/create`
    GET_ALL_USER = `${this.BASE_URL}/user`
}


export class BOOK_URL {
    PORT = 5000
    BASE_URL = `http://localhost:${this.PORT}/api/v1/`
    CREATE_BOOK = `${this.BASE_URL}book`

}