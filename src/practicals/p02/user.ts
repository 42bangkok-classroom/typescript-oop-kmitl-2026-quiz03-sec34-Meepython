export class User {
    firstName: string = ''
    lastName: string = ''
    age: number = 0

    static BIRTH_YEAR: number = 2000;

    setFirstname(name: string):void {
        this.firstName = name
    }

    setLastname(name: string):void {
        this.lastName = name
    }

    setAge(age:number):void {
        this.age = age
    }

    getFullName(): string {
        if (this.firstName === '' && this.lastName === '') {
            return ''
        } else {
            return `${this.firstName} ${this.lastName}`
        }
        
    }

    getAge(): number {
        return this.age
    }
}
