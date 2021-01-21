// chords (string)
// notes (string)
// note count (string)
outlets = 3;

var removeDuplicatesSimple = function removeDuplicatesSimple(array) {
  return array.filter(function (item, pos, self) {
    return self.indexOf(item) == pos;
  });
};
var removeDuplicates = function removeDuplicates(array, path) {
  return array.filter(function (el, i, arr) {
    return (
      arr
        .map(function (mapObj) {
          return walk(mapObj, path);
        })
        .indexOf(walk(el, path)) === i
    );
  });
};

var singleOctave = [
  {
    noteName: "C",
    black: false,
  },
  {
    noteName: "C#",
    black: true,
  },
  {
    noteName: "D",
    black: false,
  },
  {
    noteName: "D#",
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
    noteName: "F#",
    black: true,
  },
  {
    noteName: "G",
    black: false,
  },
  {
    noteName: "G#",
    black: true,
  },
  {
    noteName: "A",
    black: false,
  },
  {
    noteName: "A#",
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

var chords = [
  {
    name: "Augmented",
    abbr: "Aug",
    naturalSet: [0, 4, 8],
    quality: "Augmented",
  },
  {
    name: "Augmented 11th",
    abbr: "Aug11",
    naturalSet: [0, 4, 7, 10, 14, 18],
    quality: "Major",
  },
  {
    name: "Augmented major 7th",
    abbr: "AugM7",
    naturalSet: [0, 4, 8, 11],
    quality: "Augmented",
  },
  {
    name: "Augmented 7th",
    abbr: "Aug7",
    naturalSet: [0, 4, 8, 10],
    quality: "Augmented",
  },
  {
    name: "Augmented 6th",
    abbr: "Aug6",
    naturalSet: [0, 6, 8],
    quality: "Predominant",
  },
  {
    name: "Diminished",
    abbr: "Dim",
    naturalSet: [0, 3, 6],
    quality: "Diminished",
  },
  {
    name: "Diminished major 7th",
    abbr: "DimM7",
    naturalSet: [0, 3, 6, 11],
    quality: "Diminished",
  },
  {
    name: "Diminished 7th",
    abbr: "Dim7",
    naturalSet: [0, 3, 6, 9],
    quality: "Diminished",
  },
  {
    name: "11th",
    abbr: "11",
    naturalSet: [0, 4, 7, 10, 12, 14, 17],
    quality: "Major",
  },
  {
    name: "9th",
    abbr: "9",
    naturalSet: [0, 4, 7, 10, 14],
    quality: "Major",
  },
  {
    name: "7th",
    abbr: "7",
    naturalSet: [0, 4, 7, 10],
    quality: "Major",
  },
  {
    name: "7th (no 3rd)",
    abbr: "7 (no3)",
    naturalSet: [0, 7, 10],
    quality: "Major",
  },
  {
    name: "7th (no 5th)",
    abbr: "7 (no5)",
    naturalSet: [0, 4, 10],
    quality: "Major",
  },
  {
    name: "7th flat 5",
    abbr: "7♭5",
    naturalSet: [0, 4, 6, 10],
    quality: "Diminished",
  },
  {
    name: "7th sharp 9th",
    abbr: "7♯9",
    naturalSet: [0, 4, 7, 10, 15],
    quality: "Major",
  },
  {
    name: "Major 13th",
    abbr: "Maj13",
    naturalSet: [0, 4, 7, 10, 14, 17, 21],
    quality: "Major",
  },
  {
    name: "Dream",
    naturalSet: [0, 5, 6, 7],
    quality: "Just",
  },
  {
    name: "Elektra",
    naturalSet: [0, 7, 9, 13, 16],
    quality: "Bitonal",
  },
  {
    name: "Farben",
    naturalSet: [0, 8, 11, 16, 21],
    quality: "Atonal",
  },
  {
    name: "Half-diminished 7th",
    abbr: "Min7♭5",
    naturalSet: [0, 3, 6, 10],
    quality: "Diminished",
  },
  {
    name: "Lydian",
    naturalSet: [0, 4, 7, 11, 17],
    quality: "Major",
  },
  {
    name: "Magic",
    naturalSet: [0, 1, 5, 6, 10, 12, 15, 17],
    quality: "Just",
  },
  {
    name: "Major",
    abbr: "Maj",
    naturalSet: [0, 4, 7],
    quality: "Major",
  },
  {
    name: "5",
    abbr: "5",
    naturalSet: [0, 7],
    quality: "Major",
  },
  {
    name: "5 diminished",
    abbr: "5dim",
    naturalSet: [0, 6],
    quality: "Major",
  },
  {
    name: "Major (no 5th)",
    abbr: "Maj (no5)",
    naturalSet: [0, 4],
    quality: "Major",
  },
  {
    name: "Major (no 5th) 9",
    abbr: "Maj (no5) 9",
    naturalSet: [0, 4, 9, 14],
    quality: "Major",
  },
  {
    name: "Major flat 5th",
    abbr: "Maj♭5",
    naturalSet: [0, 4, 6],
    quality: "Major",
  },
  {
    name: "Major 11th",
    abbr: "Maj11",
    naturalSet: [0, 4, 7, 11, 14, 17],
    quality: "Major",
  },
  {
    name: "Major 7th",
    abbr: "Maj7",
    naturalSet: [0, 4, 7, 11],
    quality: "Major",
  },
  {
    name: "Major 7th (no 3rd)",
    abbr: "Maj7 (no3)",
    naturalSet: [0, 7, 11],
    quality: "Major",
  },
  {
    name: "Major 7th sharp 11th",
    abbr: "Maj7♯11",
    naturalSet: [0, 4, 8, 11, 18],
    quality: "Augmented",
  },
  {
    name: "Major 6th",
    abbr: "Maj6",
    naturalSet: [0, 4, 7, 9],
    quality: "Major",
  },
  {
    name: "Major 6th 9th",
    abbr: "Maj6/9",
    naturalSet: [0, 4, 7, 9, 14],
    quality: "Major",
  },
  {
    name: "Major 9th",
    abbr: "Maj9",
    naturalSet: [0, 4, 7, 11, 14],
    quality: "Major",
  },
  {
    name: "Major 9th sharp 11",
    abbr: "Maj9 ♯11",
    naturalSet: [0, 4, 7, 11, 14, 18],
    quality: "Major",
  },
  {
    name: "Major 13th",
    abbr: "Maj13",
    naturalSet: [0, 4, 7, 11, 14, 18, 21],
    quality: "Major",
  },
  {
    name: "Minor",
    abbr: "Min",
    naturalSet: [0, 3, 7],
    quality: "Minor",
  },
  {
    name: "Minor (no 5th)",
    abbr: "Min (no5)",
    naturalSet: [0, 3],
    quality: "Minor",
  },
  {
    name: "Minor 11th",
    abbr: "Min11",
    naturalSet: [0, 3, 7, 10, 14, 17],
    quality: "Minor",
  },
  {
    name: "Minor major 7th",
    abbr: "Min/Maj 7",
    naturalSet: [0, 3, 7, 11],
    quality: "Minor",
  },
  {
    name: "Minor 9th",
    abbr: "Min9",
    naturalSet: [0, 3, 7, 10, 14],
    quality: "Minor",
  },
  {
    name: "Minor 7th",
    abbr: "Min7",
    naturalSet: [0, 3, 7, 10],
    quality: "Minor",
  },
  {
    name: "Minor 7th (no 5th)",
    abbr: "Min7 (no5)",
    naturalSet: [0, 3, 10],
    quality: "Minor",
  },
  {
    name: "Minor 6th",
    abbr: "Min6",
    naturalSet: [0, 3, 7, 9],
    quality: "Minor",
  },
  {
    name: "Minor 6th 9th",
    abbr: "Min 6/9",
    naturalSet: [0, 3, 7, 9, 14],
    quality: "Minor",
  },
  {
    name: "Minor 13th",
    abbr: "Min13",
    naturalSet: [0, 3, 7, 10, 14, 17, 21],
    quality: "Minor",
  },
  {
    name: "Minor Add 2",
    abbr: "m2",
    naturalSet: [0, 2, 3, 7],
    quality: "Minor",
  },
  {
    name: "Minor Add 4",
    abbr: "m4",
    naturalSet: [0, 3, 5, 7],
    quality: "Minor",
  },
  {
    name: "Major Add 2",
    abbr: "Maj2",
    naturalSet: [0, 2, 4, 7],
    quality: "Major",
  },
  {
    name: "Major Add 4",
    abbr: "Maj4",
    naturalSet: [0, 4, 5, 7],
    quality: "Major",
  },
  {
    name: "Split 3rd",
    naturalSet: [0, 3, 4, 7],
    quality: "Atonal",
  },
  {
    name: "Mystic",
    naturalSet: [0, 6, 10, 16, 21, 26],
    quality: "Atonal",
  },
  {
    name: "Neapolitan",
    naturalSet: [1, 5, 8],
    quality: "Major",
  },
  {
    name: "9th augmented 5th",
    abbr: "9aug5",
    naturalSet: [0, 4, 8, 10, 14],
    quality: "Augmented",
  },
  {
    name: "9th flat 5th",
    abbr: "9♭5",
    naturalSet: [0, 4, 6, 10, 14],
    quality: "M3+d5",
  },
  {
    name: "Northern lights",
    naturalSet: [1, 2, 8, 12, 15, 18, 19, 22, 23, 28, 31],
    quality: "Atonal",
  },
  {
    name: '"Ode-to-Napoleon" hexachord',
    abbr: "magic hex",
    naturalSet: [0, 1, 4, 5, 8, 9],
    quality: "Atonal",
  },
  {
    name: "Petrushka",
    naturalSet: [0, 1, 4, 6, 7, 10],
    quality: "Mixed",
  },
  {
    name: "Alpha",
    abbr: "α",
    naturalSet: [0, 3, 6, 9, 11],
  },
  {
    name: "Beta",
    abbr: "β",
    naturalSet: [0, 3, 6, 9, 11],
  },
  {
    name: "Gamma",
    abbr: "ɣ",
    naturalSet: [0, 3, 6, 8, 11],
  },
  {
    name: "Seven six",
    abbr: "7/6",
    naturalSet: [0, 4, 7, 9, 10],
    quality: "Major",
  },
  {
    name: "7th flat nine",
    abbr: "7♭9",
    naturalSet: [0, 4, 7, 10, 13],
    quality: "Major",
  },
  {
    name: "So What",
    naturalSet: [0, 5, 10, 15, 19],
    quality: "Bitonal",
  },
  {
    name: "Suspended 2nd",
    abbr: "Sus2",
    naturalSet: [0, 2, 7],
    quality: "Suspended",
  },
  {
    name: "Suspended 4th",
    abbr: "Sus4",
    naturalSet: [0, 5, 7],
    quality: "Suspended",
  },
  {
    name: "7th Suspended 2nd",
    abbr: "7sus2",
    naturalSet: [0, 2, 7, 10],
    quality: "Suspended",
  },
  {
    name: "7th Suspended 4th",
    abbr: "7sus4",
    naturalSet: [0, 5, 7, 10],
    quality: "Suspended",
  },
  {
    name: "9th suspended 2nd",
    abbr: "9sus2",
    naturalSet: [0, 2, 7, 11, 14],
    quality: "Major",
  },
  {
    name: "9th suspended 4th",
    abbr: "9sus4",
    naturalSet: [0, 5, 7, 11, 14],
    quality: "Major",
  },
  {
    name: "13th flat 9th",
    abbr: "13♭9",
    naturalSet: [0, 4, 7, 10, 13, 17, 21],
    quality: "Major",
  },
  {
    name: "13th flat 9th flat 5th",
    abbr: "13♭9♭5",
    naturalSet: [0, 4, 6, 10, 13, 17, 21],
    quality: "M3+d5",
  },
  {
    name: "Viennese trichord",
    abbr: "tri",
    naturalSet: [0, 1, 6],
    quality: "Atonal",
  },
  {
    name: "Viennese trichord (alt)",
    abbr: "tri (alt)",
    naturalSet: [0, 6, 7],
    quality: "Atonal",
  },
].map(function (chord) {
  chord.set = removeDuplicatesSimple(
    chord.naturalSet.map(function (n) {
      return n % 12;
    })
  );
  return chord;
});

var walk = function walk(el, path) {
  var array = path.split(".");
  array.map(function (pathSegment) {
    el = el[pathSegment];
  });
  return el;
};

var groupedChords = chords.reduce(function (acc, cur) {
  acc[cur.quality] = acc[cur.quality] || [];
  acc[cur.quality].push(cur);
  return acc;
}, {});

var matchChords = function matchChords(notes) {
  var matches = [];
  notes.map(function (loopEl, loopIndex, arr) {
    var integerList = arr.map(function (note) {
      return (note.index - arr[loopIndex].index + 96) % 12;
    });
    var dedupedList = removeDuplicatesSimple(integerList);
    chords
      .filter(function (el) {
        return (
          el.set.length === dedupedList.length &&
          el.set.every(function (e) {
            return dedupedList.indexOf(e) !== -1;
          })
        );
      })
      .map(function (chord) {
        matches.push({
          chord: "".concat(arr[loopIndex].note, " ").concat(chord.name),
          abbr: chord.abbr,
          name: chord.name,
          root: arr[loopIndex].note,
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
      return chord.root + " " + (chord.abbr || chord.name);
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
