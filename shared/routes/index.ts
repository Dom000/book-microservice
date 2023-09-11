export class USER_SERVICE_ROUTES {
    BASE_URL = 'http://localhost:5020/api/v1'
    CREATE_USER = `${this.BASE_URL}/user_service`
    LOGIN = `${this.BASE_URL}/user_service/login`
    GET_ALL_USER = `${this.BASE_URL}/user_service`
    GET_USER = `${this.BASE_URL}/user_service`
}


export class BOOK_SERVICE_ROUTES {
    BASE_URL = 'http://localhost:5010/api/v1'
    CREATE_BOOK = `${this.BASE_URL}/book_service`
    GET_ALL_BOOKS = `${this.BASE_URL}/book_service`
    GET_BOOK = `${this.BASE_URL}/book_service`
}
