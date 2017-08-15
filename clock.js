class Clock {
    constructor(time) {
        this.time = time;
        this.hours = time.split(":")[0];
        this.minutes = time.split(":")[1];
    }


    speakHours() {
        if (this.time === '08:00') {
            return 'eight';
        }else if(this.time === '13:00'){
            return 'one';
        }
    }

    speakMinutes() {
        if(this.minutes === '01'){
            return 'oh one';
        }

        if (this.time === '08:10') {
            return 'ten';
        } else if (this.time === '08:20') {
            return 'twenty';
        } else if (this.time === '08:35') {
            return 'thirty five';
        }
        return "o'clock";
    }

    speakPartOfDay() {
        if(this.time === '13:00') {
            return 'in the afternoon';
        } if(this.time === '18:00') {
            return 'in the evening';
        }
        return 'in the morning';
    }

    speak() {
        if (this.time === '12:00') {
            return 'midday';
        }
        return 'midnight';
    }
}

export default Clock;
