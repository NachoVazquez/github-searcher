import {
  GithubUser,
  GithubUserResult,
  PartialGithubUserResult,
} from '@github-searcher/github-searcher/user-search/domain';

const userSearchItems: GithubUser[] = [
  {
    login: 'NachoVazquez',
    id: 9338604,
    avatar_url: 'https://avatars.githubusercontent.com/u/9338604?v=4',
    html_url: 'https://github.com/NachoVazquez',
    name: 'Nacho Vazquez',
    company: 'UruIT',
    bio:
      'inDepth.dev writer, front-end architect, meetup speaker, scuba diving lover. Passionate about Software architecture and sharing knowledge. ',
    public_repos: 22,
    followers: 13,
    location: 'Montevideo',
  },
  {
    login: 'LayZeeDK',
    id: 6364586,
    avatar_url: 'https://avatars.githubusercontent.com/u/6364586?v=4',
    html_url: 'https://github.com/LayZeeDK',
    name: 'Lars Gyrup Brink Nielsen',
    company: 'Systemate A/S',
    location: 'Holstebro, Denmark',
    bio: 'Tech Writer, Tech Speaker, OSS Contributor, Microsoft MVP.',
    public_repos: 73,
    followers: 172,
  },
];

export const createServiceSearchResult = (): PartialGithubUserResult => ({
  total_count: 100,
  items: [
    {
      login: 'NachoVazquez',
    },
    {
      login: 'LayZeeDK',
    },
  ],
});

export const createServiceGetByHandleResult = (
  handle: string
): GithubUser | undefined =>
  userSearchItems.find(user => user.login === handle);

export const createUserSearchResult = (): GithubUserResult => ({
  total_count: 100,
  items: userSearchItems,
});

export const userSearchFilters = {
  name: 'Nacho Vazquez',
  pagination: { page: 1, perPage: 10 },
  userQuery: {},
};
