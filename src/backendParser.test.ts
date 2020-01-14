import { parseBackendId } from "./backendParser";

interface UrlTestCase {
  url: string
  expected: string
}

test('Test parseBackendId', () => {
  const testCases: Array<UrlTestCase> = [
    {
      url: "https://mydomain.com/api/service/v1/resource",
      expected: "mydomain.com/api/service"
    },
    {
      url: "https://mydomain.com:8080/api/service/v1/resource",
      expected: "mydomain.com:8080/api/service"
    },
    {
      url: "/api/service/v1/resource",
      expected: "/api/service"
    },
    {
      url: "/api/service",
      expected: "/api/service"
    },
    {
      url: "/someService",
      expected: "/someService"
    },
    {
      url: "http://mydomain.com/someService",
      expected: "mydomain.com/someService"
    },
    {
      url: "http://mydomain.com/api/someService/v1/resource",
      expected: "mydomain.com/api/someService"
    },
    {
      url: "http://mydomain.com:1337/api/someService/v1/resource",
      expected: "mydomain.com:1337/api/someService"
    },
    {
      url: "http://mydomain.com",
      expected: "mydomain.com"
    },
    {
      url: "http://mydomain.com",
      expected: "mydomain.com"
    },
    {
      url: "mydomain.com/api/someService/v2/res",
      expected: "mydomain.com/api/someService"
    },
    {
      url: "mydomain.com:8080/api/someService/v2/res",
      expected: "mydomain.com:8080/api/someService"
    },
    {
      url: "https://mydomain.com:8080/api/service/v1/resource",
      expected: "mydomain.com:8080/api/service"
    }
  ]

  for (let tc of testCases) {
    expect(parseBackendId(tc.url)).toBe(tc.expected);
  }
});
