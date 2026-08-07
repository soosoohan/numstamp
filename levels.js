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
      { pos: [2,1], value: 16 }
    ],
    deck: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  },
  nstamp_004: {
  grid: { rows: 3, cols: 3 },
  rocks: [
    { pos: [2,1], value: 8 },
    { pos: [1,1], value: 16 },
    { pos: [2,2], value: 8 }
  ],
  deck: [2,4,2,4,4,2,4,2,4,2,2,4,2,4,2,4,2,4,4,2,4,2,4,2,2,4,2,4]
},
nstamp_005: {
  grid: { rows: 3, cols: 3 },
  rocks: [
    { pos: [2,1], value: 16 },
    { pos: [1,0], value: 8 },
    { pos: [1,2], value: 8 }
  ],
  deck: [4,2,4,2,2,4,2,4,2,2,4,2,4,2,4,4,2,4,2,2,4,2,4,2,2,4,2,4,2]
},
nstamp_006: {
  grid: { rows: 3, cols: 3 },
  rocks: [
    { pos: [2,1], value: 32 },
    { pos: [2,0], value: 8 },
    { pos: [2,2], value: 16 }
  ],
  deck: [2,2,4,4,4,2,2,4,2,4,2,2,4,4,2,2,2,4,4,2,4,2,4,4,2,2,2,4,4]
},
  nstamp_007: {
  grid: { rows: 3, cols: 4 },
  rocks: [
    { pos: [1,1], value: 16 },
    { pos: [2,2], value: 32 },
    { pos: [2,3], value: 8 }
  ],
  deck: [2,4,2,8,2,4,4,8,2,4,8,8,2,4,2,8,2,4,4,8,2,4,8,8,2,4,8,8,2,4,8,2,8,4]
},
nstamp_008: {
  grid: { rows: 3, cols: 5 },
  rocks: [
    { pos: [1,2], value: 16 },
    { pos: [2,1], value: 8 },
    { pos: [2,4], value: 32 }
  ],
  deck: [2,2,2,4,4,8,4,2,2,4,8,4,8,2,2,2,4,4,8,4,2,2,4,8,4,8,2,2,2,4,4,8,4,2]
},
nstamp_009: {
  grid: { rows: 4, cols: 3 },
  rocks: [
    { pos: [1,2], value: 8 },
    { pos: [2,0], value: 16 },
    { pos: [3,1], value: 32 }
  ],
  deck: [4,2,2,8,4,2,8,4,4,2,8,4,8,2,8,4,2,2,8,4,2,8,4,4,2,8,4,8,2,8,4,2]
},
    nstamp_010: {
    grid: { rows: 4, cols: 4 },
    rocks: [
      { pos: [3,1], value: 8 },
      { pos: [2,1], value: 32 },
      { pos: [1,3], value: 16 }
    ],
    deck: [2,4,8,2,2,4,8,2,4,8,4,2,4,8,2,8,4,8,2,4,2,8,2,4,8,4,2,4,8]
  },
  nstamp_011: {
    grid: { rows: 4, cols: 4 },
    rocks: [
      { pos: [3,0], value: 16 },
      { pos: [3,3], value: 16 },
      { pos: [2,1], value: 8 }
    ],
    deck: [4,2,2,8,4,2,8,4, 4,2,8,4,8,2,8,4,2,2,8,4,2,8,4,4,2,8,4,8,2,8]
  },
  nstamp_012: {
    grid: { rows: 4, cols: 4 },
    rocks: [
      { pos: [1,1], value: 32 },
      { pos: [3,3], value: 8 },
      { pos: [3,1], value: 16 }
    ],
    deck: [2,2,2,4,8,2,4,2,4,8,2,8,2,4,8,4,2,2,4,8,8,2,2,4,8,2,4,2,4,8]
  },
  nstamp_013: {
    grid: { rows: 4, cols: 5 },
    rocks: [
      { pos: [3,0], value: 8 },
      { pos: [3,4], value: 8 },
      { pos: [2,2], value: 16 }
    ],
    deck: [2,4,8,2,4,2,4,8,4,4,2,4,8,8,4,2,4,4,8,4,2,4,2,8,4,2,4,4,8,4]
  },
  nstamp_014: {
    grid: { rows: 4, cols: 5 },
    rocks: [
      { pos: [3,1], value: 16 },
      { pos: [3,3], value: 16 },
      { pos: [1,2], value: 32 }
    ],
    deck: [4,4,2,2,8,4,4,4,2,8,4,8,4,2,8,4,4,4,2,8,2,4,4,2,4,8,4,4,8,2,8]
  },
  nstamp_015: {
    grid: { rows: 5, cols: 3 },
    rocks: [
      { pos: [4,0], value: 8 },
      { pos: [4,2], value: 8 },
      { pos: [3,1], value: 16 }
    ],
    deck: [2,4,8,4,2,4,8,8,2,4,8,2,4,4,8,2,8,4,8,2,4,8]
  },
  nstamp_016: {
    grid: { rows: 5, cols: 3 },
    rocks: [
      { pos: [4,1], value: 32 },
      { pos: [3,2], value: 8 },
      { pos: [2,1], value: 16 }
    ],
    deck: [4,2,2,4,8,4,2,2,8,8,4,2,2,4,8,4,2,2,8,8,4,2,2,8]
  },
  nstamp_017: {
    grid: { rows: 5, cols: 4 },
    rocks: [
      { pos: [4,0], value: 16 },
      { pos: [4,3], value: 16 },
      { pos: [3,2], value: 8 }
    ],
    deck: [2,4,8,4,2,4,8,8,2,4,8,2,4,4,8,2,8,4,8,2,4,4,8,2,4,8,8,2,4,8]
  },
  nstamp_018: {
    grid: { rows: 5, cols: 4 },
    rocks: [
      { pos: [3,0], value: 16 },
      { pos: [3,3], value: 16 },
      { pos: [2,1], value: 32 }
    ],
    deck: [4,2,4,8,4,2,8,8,4,2,8,4,4,2,8,4,8,2,8,4,2,4,8,4,2,8,8,4,2,8]
  },
  nstamp_019: {
    grid: { rows: 5, cols: 5 },
    rocks: [
      { pos: [3,2], value: 16 },
      { pos: [2,1], value: 8 },
      { pos: [2,3], value: 8 }
    ],
    deck: [2,4,8,2,2,4,8,2,4,4,8,8,2,4,8,4,2,4,8,8,2,4,8,4,2,4,8,2,8,4,8,2,4,4,8,2,4,8]
  },
  nstamp_020: {
    grid: { rows: 5, cols: 5 },
    rocks: [
      { pos: [4,1], value: 16 },
      { pos: [3,4], value: 8 },
      { pos: [1,2], value: 32 }
    ],
    deck: [4,4,2,4,8,4,4,2,8,8,4,4,2,2,8,4,4,2,4,8,4,4,2,8,8,4,4,2,2,8,4,4,4,2,8]
  }


};

const LEVEL_IDS = Object.keys(LEVELS);
