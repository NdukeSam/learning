function Sw() {
    let startTime, stopTime, running, duration = 0;
    this.start = function () {
        if (running) {
            throw new Error('Stopwatch already started')
        }
        running = true;
        startTime = new Date();
        console.log('Starting stopwatch');
        
    },
    this.stop = function () {
        if (!running) {
            throw new Error('Stopwatch already stopped');
        } 
        running = false

        console.log('Stopwatch stopped');

        stopTime = new Date();
        let seconds = (stopTime.getTime() - startTime.getTime()) /1000
        duration += seconds
        // console.log(duration);
    },
    this.reset = function () {
       if( (startTime === null) && (stopTime === null) && (running === false) && (duration === 0)) {

           throw new Error ('StopWatch reset. Kindly start again')
        }
        startTime = null, stopTime = null, running = false, duration = 0;
        console.log('Stopwatch reset');
    }

    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        } 
    })
}

const stopWatch = new Sw()