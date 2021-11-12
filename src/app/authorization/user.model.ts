export class UserModel {
    // ########################################

    constructor(
        public id: string,
        public firstname: string,
        public lastname: string,
        public email: string,
        public phone: string,
        public location: string,
        public specialties: string,
        public photo: string
    ) {}

    // ########################################

    public get fullName(): string {
        return `${this.firstname} ${this.lastname}`;
    }

    // ########################################
}
