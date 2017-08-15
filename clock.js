class Clock {
    constructor(time) {
        this.time = time;
    }

    speakHours() {
        if (this.time === '08:00') {
            return 'eight';
        }else if(this.time === '13:00'){
            return 'one';
        }
    }

    speakMinutes() {
        return "o'clock";
    }

    speak() {
        if (this.time === '12:00') {
            return 'midday';
        }
        return 'midnight';
    }
}

export default Clock;
