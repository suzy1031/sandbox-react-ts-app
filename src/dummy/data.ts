const zeroData = [
  {
    id: 1,
    name: 'zero1',
  },
  {
    id: 2,
    name: 'zero2',
  },
  {
    id: 3,
    name: 'zero3',
  },
];

const firstData = [
  {
    id: 10,
    name: 'first10',
  },
  {
    id: 11,
    name: 'first11',
  },
  {
    id: 12,
    name: 'first12',
  },
];

const secondData = [
  {
    id: 20,
    name: 'second20',
  },
  {
    id: 21,
    name: 'second21',
  },
  {
    id: 22,
    name: 'second22',
  },
];

export const data = (type: string): Array<{ id: number; name: string }> => {
  switch (type) {
    case '0':
      return zeroData;
    case '1':
      return firstData;
    case '2':
      return secondData;
    default:
      return [];
  }
};
