import { getAllCombinations, removeDuplicatesSimple } from "./utils";

/**
 * chord sets are comma-separated lists of strings
 * optional notes are denoted by n? eg: "0, 4, 7?, 10"
 */
export const chords = [
  {
    name: "Augmented",
    abbr: "aug",
    naturalSet: "0, 4, 8",
    quality: "Augmented",
  },
  {
    name: "Augmented 11th",
    abbr: "aug11",
    naturalSet: "0, 4, 7?, 10, 14, 18",
    quality: "Major",
  },
  {
    name: "Augmented major 7th",
    abbr: "augM7",
    naturalSet: "0, 4, 8, 11",
    quality: "Augmented",
  },
  {
    name: "Augmented 7th",
    abbr: "aug7",
    naturalSet: "0, 4, 8, 10",
    quality: "Augmented",
  },
  {
    name: "Augmented 6th",
    abbr: "aug6",
    naturalSet: "0, 6, 8",
    quality: "Predominant",
  },
  {
    name: "Diminished",
    abbr: "dim",
    naturalSet: "0, 3, 6",
    quality: "Diminished",
  },
  {
    name: "Diminished major 7th",
    abbr: "dimM7",
    naturalSet: "0, 3, 6, 11",
    quality: "Diminished",
  },
  {
    name: "Diminished 7th",
    abbr: "dim7",
    naturalSet: "0, 3, 6, 9",
    quality: "Diminished",
  },
  {
    name: "11th",
    abbr: "11",
    naturalSet: "0, 4, 7?, 10, 12, 14, 17",
    quality: "Major",
  },
  {
    name: "9th",
    abbr: "9",
    naturalSet: "0, 4, 7?, 10, 14",
    quality: "Major",
  },
  {
    name: "7th",
    abbr: "7",
    naturalSet: "0, 4, 7?, 10",
    quality: "Major",
  },
  {
    name: "7th (no 3rd)",
    abbr: "7 (no3)",
    naturalSet: "0, 7, 10",
    quality: "Major",
  },
  {
    name: "7th flat 5",
    abbr: "7♭5",
    naturalSet: "0, 4, 6, 10",
    quality: "Diminished",
  },
  {
    name: "7th sharp 9th",
    abbr: "7♯9",
    naturalSet: "0, 4, 7?, 10, 15",
    quality: "Major",
  },
  {
    name: "Major 13th",
    abbr: "maj13",
    naturalSet: "0, 4, 7?, 10, 14, 17, 21",
    quality: "Major",
  },
  {
    name: "Dream",
    naturalSet: "0, 5, 6, 7",
    quality: "Just",
  },
  {
    name: "Elektra",
    naturalSet: "0, 7, 9, 13, 16",
    quality: "Bitonal",
  },
  {
    name: "Farben",
    naturalSet: "0, 8, 11, 16, 21",
    quality: "Atonal",
  },
  {
    name: "Half-diminished 7th",
    abbr: "min7♭5",
    naturalSet: "0, 3, 6, 10",
    quality: "Diminished",
  },
  {
    name: "Lydian",
    naturalSet: "0, 4, 7, 11, 17",
    quality: "Major",
  },
  {
    name: "Magic",
    naturalSet: "0, 1, 5, 6, 10, 12, 15, 17",
    quality: "Just",
  },
  {
    name: "Major",
    abbr: "maj",
    naturalSet: "0, 4, 7?",
    quality: "Major",
  },
  {
    name: "5",
    abbr: "5",
    naturalSet: "0, 7",
    quality: "Major",
  },
  {
    name: "5 diminished",
    abbr: "5dim",
    naturalSet: "0, 6",
    quality: "Major",
  },
  {
    name: "Major flat 5th",
    abbr: "maj♭5",
    naturalSet: "0, 4, 6",
    quality: "Major",
  },
  {
    name: "Major 11th",
    abbr: "maj11",
    naturalSet: "0, 4, 7, 11, 14, 17",
    quality: "Major",
  },
  {
    name: "Major 7th",
    abbr: "maj7",
    naturalSet: "0, 4, 7?, 11",
    quality: "Major",
  },
  {
    name: "Major 7th (no 3rd)",
    abbr: "maj7 (no3)",
    naturalSet: "0, 7, 11",
    quality: "Major",
  },
  {
    name: "Major 7th sharp 11th",
    abbr: "maj7♯11",
    naturalSet: "0, 4, 8, 11, 18",
    quality: "Augmented",
  },
  {
    name: "Major 6th",
    abbr: "maj6",
    naturalSet: "0, 4, 7, 9",
    quality: "Major",
  },
  {
    name: "Major 6th 9th",
    abbr: "maj6/9",
    naturalSet: "0, 4, 7, 9, 14",
    quality: "Major",
  },
  {
    name: "Major 9th",
    abbr: "maj9",
    naturalSet: "0, 4, 7?, 11, 14",
    quality: "Major",
  },
  {
    name: "Major 9th sharp 11",
    abbr: "maj9♯11",
    naturalSet: "0, 4, 7?, 11, 14, 18",
    quality: "Major",
  },
  {
    name: "Major 13th",
    abbr: "maj13",
    naturalSet: "0, 4, 7?, 11, 14, 18, 21",
    quality: "Major",
  },
  {
    name: "Minor",
    abbr: "min",
    naturalSet: "0, 3, 7?",
    quality: "Minor",
  },
  {
    name: "Minor 11th",
    abbr: "min11",
    naturalSet: "0, 3, 7, 10, 14, 17",
    quality: "Minor",
  },
  {
    name: "Minor major 7th",
    abbr: "min/maj 7",
    naturalSet: "0, 3, 7, 11",
    quality: "Minor",
  },
  {
    name: "Minor 9th",
    abbr: "min9",
    naturalSet: "0, 3, 7?, 10, 14",
    quality: "Minor",
  },
  {
    name: "Minor 7th",
    abbr: "min7",
    naturalSet: "0, 3, 7?, 10",
    quality: "Minor",
  },
  {
    name: "Minor 6th",
    abbr: "min6",
    naturalSet: "0, 3, 7?, 9",
    quality: "Minor",
  },
  {
    name: "Minor 6th 9th",
    abbr: "min6/9",
    naturalSet: "0, 3, 7?, 9, 14",
    quality: "Minor",
  },
  {
    name: "Minor 13th",
    abbr: "min13",
    naturalSet: "0, 3, 7?, 10, 14, 17, 21",
    quality: "Minor",
  },
  {
    name: "Minor Add 2",
    abbr: "min2",
    naturalSet: "0, 2, 3, 7",
    quality: "Minor",
  },
  {
    name: "Minor Add 4",
    abbr: "min4",
    naturalSet: "0, 3, 5, 7",
    quality: "Minor",
  },
  {
    name: "Major Add 2",
    abbr: "maj2",
    naturalSet: "0, 2, 4, 7",
    quality: "Major",
  },
  {
    name: "Major Add 4",
    abbr: "maj4",
    naturalSet: "0, 4, 5, 7",
    quality: "Major",
  },
  {
    name: "Split 3rd",
    naturalSet: "0, 3, 4, 7",
    quality: "Atonal",
  },
  {
    name: "Mystic",
    naturalSet: "0, 6, 10, 16, 21, 26",
    quality: "Atonal",
  },
  {
    name: "Neapolitan",
    naturalSet: "1, 5, 8",
    quality: "Major",
  },
  {
    name: "9th augmented 5th",
    abbr: "9aug5",
    naturalSet: "0, 4, 8, 10, 14",
    quality: "Augmented",
  },
  {
    name: "9th flat 5th",
    abbr: "9♭5",
    naturalSet: "0, 4, 6, 10, 14",
    quality: "M3+d5",
  },
  {
    name: "Northern lights",
    naturalSet: "1, 2, 8, 12, 15, 18, 19, 22, 23, 28, 31",
    quality: "Atonal",
  },
  {
    name: '"Ode-to-Napoleon" hexachord',
    abbr: "magic hex",
    naturalSet: "0, 1, 4, 5, 8, 9",
    quality: "Atonal",
  },
  {
    name: "Petrushka",
    naturalSet: "0, 1, 4, 6, 7, 10",
    quality: "Mixed",
  },
  {
    name: "Alpha",
    abbr: "α",
    naturalSet: "0, 3, 6, 9, 11",
  },
  {
    name: "Beta",
    abbr: "β",
    naturalSet: "0, 3, 6, 9, 11",
  },
  {
    name: "Gamma",
    abbr: "ɣ",
    naturalSet: "0, 3, 6, 8, 11",
  },
  {
    name: "Seven six",
    abbr: "7/6",
    naturalSet: "0, 4, 7, 9, 10",
    quality: "Major",
  },
  {
    name: "7th flat nine",
    abbr: "7♭9",
    naturalSet: "0, 4, 7, 10, 13",
    quality: "Major",
  },
  {
    name: "So What",
    naturalSet: "0, 5, 10, 15, 19",
    quality: "Bitonal",
  },
  {
    name: "Suspended 2nd",
    abbr: "sus2",
    naturalSet: "0, 2, 7",
    quality: "Suspended",
  },
  {
    name: "Suspended 4th",
    abbr: "sus4",
    naturalSet: "0, 5, 7",
    quality: "Suspended",
  },
  {
    name: "7th Suspended 2nd",
    abbr: "7sus2",
    naturalSet: "0, 2, 7, 10",
    quality: "Suspended",
  },
  {
    name: "7th Suspended 4th",
    abbr: "7sus4",
    naturalSet: "0, 5, 7, 10",
    quality: "Suspended",
  },
  {
    name: "9th suspended 2nd",
    abbr: "9sus2",
    naturalSet: "0, 2, 7, 11, 14",
    quality: "Major",
  },
  {
    name: "9th suspended 4th",
    abbr: "9sus4",
    naturalSet: "0, 5, 7, 11, 14",
    quality: "Major",
  },
  {
    name: "13th flat 9th",
    abbr: "13♭9",
    naturalSet: "0, 4, 7, 10, 13, 17, 21",
    quality: "Major",
  },
  {
    name: "13th flat 9th flat 5th",
    abbr: "13♭9♭5",
    naturalSet: "0, 4, 6, 10, 13, 17, 21",
    quality: "M3+d5",
  },
  {
    name: "Viennese trichord",
    abbr: "tri",
    naturalSet: "0, 1, 6",
    quality: "Atonal",
  },
  {
    name: "Viennese trichord (alt)",
    abbr: "tri (alt)",
    naturalSet: "0, 6, 7",
    quality: "Atonal",
  },
];

/**
 * typical object looks like
  {
    name: "Major",
    abbr: "maj",
    naturalSet: "0, 4, 7?",
    sets: [[0, 4], [0, 4, 7]],
    quality: "Major",
  }
 */
export default chords.map(function (chord, index) {
  var setStrings = chord.naturalSet.split(",").map(function (el) {
    return el.trim();
  });
  var minimalSet = setStrings
    .filter(function (el) {
      return !el.includes("?");
    })
    .map(function (el) {
      return parseInt(el);
    });
  var optionals = setStrings
    .filter(function (el) {
      return el.includes("?");
    })
    .map(function (el) {
      return parseInt(el.replace("?", ""));
    });
  chord.sets = getAllCombinations(optionals, 1).map(function (combo) {
    var set = minimalSet.concat(combo);
    return removeDuplicatesSimple(
      set.map(function (n) {
        return n % 12;
      })
    );
  });
  chord.sets.push(minimalSet);

  return chord;
});
