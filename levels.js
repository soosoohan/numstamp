const LEVELS = {
  nstamp_001: {
    grid: { rows: 5, cols: 1 },
    rocks: [
      { pos: [4,0], value: 16 },
      { pos: [3,0], value: 8 },
      { pos: [2,0], value: 4 }
    ],
    deck: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  },
  nstamp_002: {
    grid: { rows: 2, cols: 2 },
    rocks: [
      { pos: [0,0], value: 2 },
      { pos: [1,0], value: 4 },
      { pos: [1,1], value: 8 }
    ],
    deck: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  },
  nstamp_003: {
    grid: { rows: 3, cols: 3 },
    rocks: [
      { pos: [1,1], value: 8 },
      { pos: [1,2], value: 16 },
      { pos: [2,1], value: 32 }
    ],
    deck: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  }
};

const LEVEL_IDS = Object.keys(LEVELS);
