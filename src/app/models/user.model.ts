export class User {
    constructor (
        public id_person: number,
        public username: string,
        public email: string,
        public password: string,
        public id?: number
    ) {}
};