// Aktuális dátum és idő létrehozása
let now = new Date();

// Időzóna különválasztása
let timeZoneOffset = now.getTimezoneOffset() / 60;
let timeZoneSign = timeZoneOffset > 0 ? '-' : '+';
timeZoneOffset = Math.abs(timeZoneOffset);
let timeZoneHours = ('0' + timeZoneOffset).slice(-2);
let timeZoneMinutes = ('0' + (timeZoneOffset % 1 * 60)).slice(-2);

// Időzóna string összeállítása
let timeZoneString = 'UTC' + timeZoneSign + timeZoneHours + ':' + timeZoneMinutes;

// Idő kiszámítása az időzóna figyelembevételével
let localTime = new Date(now.getTime() + now.getTimezoneOffset() * 60000);

// Idő formázása
let hours = ('0' + localTime.getHours()).slice(-2);
let minutes = ('0' + localTime.getMinutes()).slice(-2);
let seconds = ('0' + localTime.getSeconds()).slice(-2);

// Pontos idő kiírása
console.log('Aktuális idő (lokális időzóna szerint): ' + hours + ':' + minutes + ':' + seconds + ' ' + timeZoneString);
