    // let circle = {
    //     radius: 1,
    //     location: {
    //         x: 1,
    //         y:1
    //     },
    //     draw: function () {
    //         console.log('draw');       
    //     }
    // }

// Factory function
    // function createCircle(radius) {
    //     return {
    //         radius,
    //         draw: function() {
    //             console.log('draw');
    //         }
    //     };
    // }

    // const circle = createCircle(1);

    //Constructor function 
    function Circle(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log(draw);
        }
    }
 const another = new Circle(1);

    //Add or remove properties
     another.location = {x: 1};
     another['finesse'] = 'fla';

     delete another.finesse;

     //Reiterate over or enumerate a property

     for (const mkpo in another) {
        if  (typeof another[mkpo] !== 'function') {
            
            console.log(mkpo, another[mkpo])
        }
    }

    let mkpo = Object.keys(another);

    console.log(mkpo);

    if ('radius' in another) {
        console.log('Circle has a radius');
    }

    // Abstraction: Hide the details, show only the essentials
    function Square(radius) {
        this.area = area;
        //by declaring a local variable, you can hide its details from the global scope
        let defaultLocation = {x: 0, y: 0}
        
        let = computeOptimumLocation = function (factor) {
            //...
        }

        this.draw = function(){
            computeOptimumLocation(0.1);
            //if you want to access members of the new Square object, you use the 'this' keyword
            this.radius
            console.log('draw');
        }

        //scope is temporary; after executing a function, the scope dies
        //Closure stays; its permanent
    }

    const square = new Square(20)
    // square.computeOptimumLocation(0.1) is no longer accessible to the global scope; it was locally declared

    // const Circle1 = new Function ('radius', `
    // this.radius = radius;
    // this.draw = function () {
    //     console.log(draw);
    // }
    // `);

    // const secCircle = new Circle1(1);
    
   

    //Primititves are copied by their value
    //Objects or reference types are copied by their reference
    // let x = { value: 10};
    // let y = x;

    // x.value = 40;

    let obj = {value: 10};
    let increase = function(obj) {
        obj.value++
    }

    increase(obj);
    console.log(obj);


