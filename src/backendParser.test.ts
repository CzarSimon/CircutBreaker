import { parseBackendId } from "./backendParser";

interface UrlTestCase {
  expected: string
  url: string
}

test('Test parseBackendId', () => {
  const testCases: UrlTestCase[] = [
    {
      expected: "mydomain.com/api/service",
      url: "https://mydomain.com/api/service/v1/resource"
    },
    {
      expected: "mydomain.com:8080/api/service",
      url: "https://mydomain.com:8080/api/service/v1/resource"
    },
    {
      expected: "/api/service",
      url: "/api/service/v1/resource"
    },
    {
      expected: "/api/service",
      url: "/api/service"
    },
    {
      expected: "/someService",
      url: "/someService"
    },
    {
      expected: "mydomain.com/someService",
      url: "http://mydomain.com/someService"
    },
    {
      expected: "mydomain.com/api/someService",
      url: "http://mydomain.com/api/someService/v1/resource"
    },
    {
      expected: "mydomain.com:1337/api/someService",
      url: "http://mydomain.com:1337/api/someService/v1/resource"
    },
    {
      expected: "mydomain.com",
      url: "http://mydomain.com"
    },
    {
      expected: "mydomain.com",
      url: "http://mydomain.com"
    },
    {
      expected: "mydomain.com/api/someService",
      url: "mydomain.com/api/someService/v2/res"
    },
    {
      expected: "mydomain.com:8080/api/someService",
      url: "mydomain.com:8080/api/someService/v2/res"
    }
  ]

  for (const tc of testCases) {
    expect(parseBackendId(tc.url)).toBe(tc.expected);
  }
});
