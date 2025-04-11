/**
 *   
 * 
 * 
  
- chooses between multiple chords - which are harmonized from a major scale

  - this one is Eb major scale harmony

  - for every chord - try to play some of the root notes with right hand and the chord with left hand:

  Eb, F, G, Ab, Bb, C, D, Eb

    Eb major
    F minor
    G minor
    Ab major
    Bb major
    C minor
    D diminished
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

    const chordArray = ['Eb Major', 'F Minor', 'G Minor', 'Ab Major', 'Bb Major', 'C Minor', 'D Diminished'];
    const rightHandRootNote = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'D'];

    const rightHand7thChordNotes = ['D', 'Eb', 'F', 'G', 'Ab', 'Bb', 'C'];
    const seventhChordName = ['Eb Maj7', 'F min7', 'G min7', 'Ab Maj7', 'Bb 7', 'C min7', 'D min7 b5']
    let chordIndex = 0;

    const minorChords = ['Eb minor', 'F diminished', 'Gb Major', 'Ab minor', 'Bb minor', 'B major', 'Db major']


    const basicChords = ['G', 'D', 'C', 'Em', 'Am', 'F']
     
    
    const whichHand2 = ['left', 'right'];
    let whichHandToPlayIndex2 = 0;
    
    
    
    const gameLimit2 = 20;
    let gameCount2 = 0;
    const timeBetweenGames2 = 8000;
    
    
    const brain2 = () => {
    
        let chord, whichHandToPlay;
    
        function doOnce() {
            chordIndex = pickRandomNumberDifferentFromLastTime(basicChords.length, chordIndex);
            chord = basicChords[chordIndex];
    
            //whichHandToPlayIndex2 = pickRandomNumberZeroBased(whichHand2.length, whichHandToPlayIndex2);
            //whichHandToPlay = whichHand2[whichHandToPlayIndex2];
    
            console.log(`${chord}  `);
    
            gameCount2++;
        }
    
        doOnce();
    
        const interval = setInterval(() => {
            doOnce();
            if(gameCount2 === gameLimit2){
                console.log('game over');
                clearInterval(interval);
            }
        }, timeBetweenGames2);
        return interval;
    }