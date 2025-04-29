import { BLACKLIST } from '../constants/blacklist';

export const isSafeProject = (url: string): boolean => {
  return !BLACKLIST.some((badDomain) => url.includes(badDomain));
};
