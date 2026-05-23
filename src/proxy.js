import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { testLoggingMiddleware } from './middlewares/test-logging'

const intlMiddleware = createMiddleware(routing)

export default function proxy(request) {
  testLoggingMiddleware(request)

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/', '/(uk)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)'],
}
