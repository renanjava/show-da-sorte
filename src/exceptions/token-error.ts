export class TokenError extends Error{
    name: string
    message: string

    constructor(name, message){
        super()
        this.name = name
        this.message = message
    }
}