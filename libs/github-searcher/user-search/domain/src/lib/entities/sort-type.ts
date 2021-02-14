export const sortTypes = [
  'BestMatch',
  'MostFollowers',
  'FewestFollowers',
  'MostRecentlyJoined',
  'LeastRecentlyJoined',
  'MostRepositories',
  'FewestRepositories',
] as const;

export type SortType = typeof sortTypes[number];
