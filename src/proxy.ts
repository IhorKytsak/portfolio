import createMiddleware from 'next-intl/middleware'
import type { NextRequest, ProxyConfig } from 'next/server'
import { routing } from './i18n/routing'
import { testLoggingMiddleware } from './middlewares/test-logging'

const intlMiddleware = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  testLoggingMiddleware(request)

  return intlMiddleware(request)
}

export const config: ProxyConfig = {
  matcher: ['/', '/(uk)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
