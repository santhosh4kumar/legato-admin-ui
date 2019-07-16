export class User {
    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    };
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token?: string;
    email: string;
    mobile: string;
    gender: number;
    birthDate: Date;
    managerId: number;
    image: string;
}