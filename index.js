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
    function createCircle(radius) {
        return {
            radius,
            draw: function() {
                console.log('draw');
            }
        };
    }

    let circle = createCircle(1);

    //Constructor function 
    function Circle(radius) {
        this.radius = radius;
        this.draw = function () {
            console.log(draw);
        }
    }
    const another = new Circle(1);