import "./polyfills";
import chords from "./chords";
import { removeDuplicatesSimple, removeDuplicates } from "./utils";

// chords (string)
// notes (string)
// note count (string)
outlets = 3;

var singleOctave = [
  {
    noteName: "C",
    black: false,
  },
  {
    noteName: "C♯",
    black: true,
  },
  {
    noteName: "D",
    black: false,
  },
  {
    noteName: "D♯",
    black: true,
  },
  {
    noteName: "E",
    black: false,
  },
  {
    noteName: "F",
    black: false,
  },
  {
    noteName: "F♯",
    black: true,
  },
  {
    noteName: "G",
    black: false,
  },
  {
    noteName: "G♯",
    black: true,
  },
  {
    noteName: "A",
    black: false,
  },
  {
    noteName: "A♯",
    black: true,
  },
  {
    noteName: "B",
    black: false,
  },
];

var getNoteIndexForMIDI = function getNoteIndexForMIDI(code) {
  return code - 21;
};

var noteObjectForIndex = function noteObjectForIndex(index) {
  // A0 is index=0
  var adjustedIndex = index;
  var note = singleOctave[adjustedIndex % 12];
  return note;
};

var noteForIndex = function noteForIndex(index) {
  var note = noteObjectForIndex(index);
  return note.noteName;
};

var octaveForIndex = function octaveForIndex(index) {
  var adjustedIndex = index;
  var octave = Math.floor(adjustedIndex / 12);
  return octave;
};

var blackForIndex = function blackForIndex(index) {
  return noteObjectForIndex(index).black;
};

var matchChords = function matchChords(notes) {
  var matches = [];
  notes.map(function (loopEl, loopIndex) {
    var integerList = notes.map(function (note) {
      return (note.index - notes[loopIndex].index + 96) % 12;
    });
    var dedupedList = removeDuplicatesSimple(integerList);
    chords
      .filter(function (chord) {
        return chord.sets.some(function (set) {
          return (
            set.length === dedupedList.length &&
            set.every(function (e) {
              return dedupedList.indexOf(e) !== -1;
            })
          );
        });
      })
      .map(function (chord) {
        matches.push({
          chord: "".concat(notes[loopIndex].note, " ").concat(chord.name),
          abbr: chord.abbr,
          name: chord.name,
          root: notes[loopIndex].note,
          quality: chord.quality,
        });
      });
  }); // dedupe results

  matches = removeDuplicates(matches, "chord");
  return matches;
};

var noteOn = function (note) {
  // cancel existing timeouts
  if (holdTimeouts[note.index]) {
    holdTimeouts[note.index].cancel();
  } else {
    activeNotes.push(note);
  }

  detectChords();
};
var noteOff = function (note) {
  if (pedalSustained) {
    sustainedNotes.push(note);
  } else {
    // delay noteOff
    holdTimeouts[note.index] = new Task(function () {
      activeNotes = activeNotes.filter(function (n) {
        return n.index !== note.index;
      });
      delete holdTimeouts[note.index];
      detectChords();
    });
    holdTimeouts[note.index].schedule(holdDuration);
  }
};

var detectChords = function detectChords() {
  activeChords = matchChords(activeNotes);
  var dedupedActiveNotes = removeDuplicates(activeNotes, "note");

  var chordsString = activeChords
    .map(function (chord) {
      return chord.root + (chord.abbr || " " + chord.name);
    })
    .join(" \n");
  var notesString = dedupedActiveNotes
    .sort(function (a, b) {
      a.index - b.index;
    })
    .map(function (note) {
      return note.note;
    })
    .join(" ");

  outlet(0, chordsString);
  outlet(1, notesString || "-");
  outlet(2, dedupedActiveNotes.length);
};

// State variables
var activeNotes = [];
var activeChords = [];
var holdTimeouts = {};
var holdDuration = 0;
var pedalSustained = false;
var sustainedNotes = [];

//
// Inputs
//

// Input: Hold Text Input
var msg_float = function float(holdTime) {
  holdDuration = holdTime;
};

// Input: MIDI Events (Sustain Pedal)
var midievent = function midievent(status, cc, value) {
  if (status === 176) {
    // Sustain pedal
    if (cc === 64) {
      // on
      if (value > 64) {
        pedalSustained = true;
      } else {
        pedalSustained = false;
        sustainedNotes.forEach(function (note) {
          noteOff(note);
        });
        sustainedNotes = [];
      }
      detectChords();
    }
  }
};

// Input: Notes
var list = function list(noteIndex, vel) {
  var note = {
    index: noteIndex,
    black: blackForIndex(noteIndex),
    note: noteForIndex(noteIndex),
    octave: octaveForIndex(noteIndex),
  };

  if (vel > 0) {
    noteOn(note);
  } else {
    noteOff(note);
  }
};
