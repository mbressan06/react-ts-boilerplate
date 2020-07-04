export class User {
    id: number;
    name: string;
    email: string;
    active: boolean;
    hash: string;

    constructor( obj: User ){
        this.id = obj.id;
        this.name = obj.name;
        this.email = obj.email;
        this.hash = obj.hash;
        this.active = obj.active;
    }
}
