/**
 *   
 * 
 * - which shows the name of a random chord everytime
  - tells which hand to play it from 
  - tells the variation - major, minor, diminished (more will be added later)
  - tells if we should play the octave high note or not
  - whether it should be 1st or second inversion - or use notes from ahead or behind the root note
  - for any sharp or flat it will choose what to call it - it can choose between the 2

Give a new note each time

you have to:

1. look at it.
2. break down the notes 
3. locate them - and sing the individual notes
4. play them accordingly
5. when u play the chord inversion, name the inversion
6. try to write the chord in the sheet music

the time interval will keep decreasing as the game progresses
 * 
 */

function pickRandomNumberDifferentFromLastTime(limit, seed) {
    let b = seed;
    while (b === seed) {
      b = Math.floor(Math.random() * limit);
    }
    return b;
}

function pickRandomNumberZeroBased(limit, seed) {
    // if the length is 2 - simply choose the other option - add the hack for that
    if(limit === 2){
        return seed === 0 ? 1 : 0;
    }

    return Math.floor(Math.random() * limit);
    
}

const notes = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab'];
const sharpFlatRelations = {
    'A#': 'Bb',
    'C#': 'Db',
    'D#': 'Eb',
    'F#': 'Gb',
    'G#': 'Ab',
}
let noteIndex = 0;

const whichHand = ['left', 'right'];
let whichHandToPlayIndex = 0;

const variationArr = ['major', 'minor'];
let variationIndex = 0;

const gameLimit = 40;
let gameCount = 0;
const timeBetweenGames = 11600;


//the main orchestrator
function brain(){
    let note, whichHandToPlay, variation, octaveHighNote, inversion, isSharpFlat;

    function doOnce(){
        noteIndex = pickRandomNumberDifferentFromLastTime(notes.length, noteIndex);
        note = notes[noteIndex];
        
        whichHandToPlayIndex = pickRandomNumberZeroBased(whichHand.length, whichHandToPlayIndex);
        whichHandToPlay = whichHand[whichHandToPlayIndex];
        
        variationIndex = pickRandomNumberZeroBased(variationArr.length, variationIndex);
        variation = variationArr[variationIndex];
        
        
        //isSharpFlat = note in sharpFlatRelations;
        //sharpFlatIndex = pickRandomNumberZeroBased(2, sharpFlatIndex);

        //note = isSharpFlat ? sharpFlatRelations[note] : note;

        const prompt = `Note -> ${note} ${variation} , ${whichHandToPlay} hand`;
        console.log(prompt);

        gameCount++;
    }

    doOnce();
    
    const interval = setInterval(() => {
        //choose new values
        doOnce();
        
        if(gameCount === gameLimit){
            clearInterval(interval);
        }
    }, timeBetweenGames);
    return interval;
}














