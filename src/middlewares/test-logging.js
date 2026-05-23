/**
 * Example middleware helper — logs matched requests in dev.
 * Chained from src/proxy.js before next-intl runs.
 */
export function testLoggingMiddleware(request) {
  const { pathname, search } = request.nextUrl

  console.log('[test-middleware]', {
    method: request.method,
    pathname,
    search: search || undefined,
    locale: request.headers.get('accept-language')?.split(',')[0],
  })
}
