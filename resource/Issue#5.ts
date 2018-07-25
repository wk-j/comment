// TODO "wciągać poprawne wartości z obiektu"
var soulencjaSeedData = {
    soulIdParent: '',
    soulType: '',
    language: '',
    text: '',
    image: '',
    audio: '',
    video: '',
    reason: '',
    habit: {
        habitType: '', // ['growth', 'excite', 'sustain', 'maintenance', 'challenge'];
        displayType: '',
        frequency: '', // [just once', hourly','daily','weekly','monthly','quarterly','annually','bi-annually]
        timePreference: [], // select date/time, select place, at mornings, mid-day, lunch, end-of-day, weekend, laetr today, next week, next weekend, sunday, end of month, end of year, some day
        coolDown: '', // czas do następnego powtórzenia - kkiedy nie pokazywać karty
        timestamps: []
    },
    source: {
        author: '',
        created: '',
        source: '',
        sourceLink: ''
    }
};
