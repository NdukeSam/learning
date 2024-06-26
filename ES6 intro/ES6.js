const person = {
    name: 'Peter',
    walk () {
        console.log(this);
    }
}

person.walk()
//Using bind method to permanently bind the 'this' keyword
const walk = person.walk.bind(person)

walk();

//Arrow functions
const jobs = [
    {id: 1, isActive: true},
    {id: 2, isActive: true},
    {id: 3, isActive: false}
]

jobs.filter(function (job) {return job.isActive;})

const activeJobs = jobs.filter( job =>  job.isActive)

const animal = {
    name: 'Sheriff',
    walk () {
        // var self = this;

        // arrow functions don't rebind the 'this' keyword
        setTimeout( ()=> {
            // console.log('got them limbs')
            console.log('this', this);
        }, 1000);

    }
}

animal.walk()
//Array.map
const colors = ['red', 'white', 'blue'];
const items = colors.map(color => `<li>${color}</li>`)

console.log(items);

// Destructuring
const address = {
    street: '',
    city: '',
    country: '',
    
}

const {} = address

