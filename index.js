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
        console.log(mkpo, another[mkpo])
    }

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


