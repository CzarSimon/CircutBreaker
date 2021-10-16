import { Optional } from './types';

export function parseBackendId(urlStr: string): string {
  const domain = parseDomain(urlStr);
  return (domain || '') + parseUrlRoute(urlStr, domain);
}

function parseUrlRoute(url: string, domain: Optional<string>): string {
  const path = parsePath(url, domain);
  return path
    .split('/')
    .slice(0, 3)
    .join('/');
}

function parsePath(url: string, domain: Optional<string>): string {
  if (!domain) {
    return url;
  }

  const urlSplit = url.split(domain);
  return urlSplit.length >= 2 ? urlSplit[1] : urlSplit[0];
}

const SCHEME_AND_DOMAIN_PATTERN = '^(?:https?:)?(?://)?([^/?]+)';

function parseDomain(url: string): Optional<string> {
  const matches = url.match(SCHEME_AND_DOMAIN_PATTERN);
  if (!matches || matches.length < 1) {
    return undefined;
  }

  const schemeAndDomain = matches[0].split('://');
  return schemeAndDomain.length >= 2 ? schemeAndDomain[1] : schemeAndDomain[0];
}
