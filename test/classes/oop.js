///////////Old approach/////////////////////////
// const admin = {
//     rules: 777,
//     printInfo(){
//         console.log(`I'am ${this.name} with rules ${this.rules}`)
//     }
// }

// function User(name, age, isAdmin=false){
//     this.name = name;
//     this.age = age;
//     this.isAdmin = isAdmin;
//     this.__proto__ = admin;
// }

// const u1 = new User('Ivan', 18, true);

///////////New approach/////////////////////////
/**
 * this is admin class with rules
 */
class Admin{
    /**
     * this is a constructor for Admin Class
     * @param {string} rules admin or user rules
     */
    constructor(rules){
        this.rules = rules;
    }

    /**
     * This is a function to print admin or user info
     */
    printInfo(){
        console.log(`I'am ${this.name} with rules ${this.rules}`)
    }
}

/**
 * This is a User class to inherit Admin class
 */
class User extends Admin{

    /**
     * Constructor function for User class
     * @param {string} rules admin or user rules
     * @param {string} name admin or user name
     * @param {number} age admin or user age
     * @param {boolean} isAdmin value of is admin question
     */
    constructor(rules, name, age, isAdmin=false){
        super(rules);
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }

    // printInfo(){
    //     console.log(`I'am ${this.name} with rules ${this.rules} from User Class`)
    // }
}

const u1 = new User('111', 'Jorik', 20);