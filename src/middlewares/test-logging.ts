import type { NextRequest } from 'next/server'

/**
 * Example middleware helper — logs matched requests in dev.
 * Chained from src/proxy.ts before next-intl runs.
 */
export function testLoggingMiddleware(request: NextRequest): void {
  const { pathname, search } = request.nextUrl

  console.log('[test-middleware]', {
    method: request.method,
    pathname,
    search: search || undefined,
    locale: request.headers.get('accept-language')?.split(',')[0],
  })
}
