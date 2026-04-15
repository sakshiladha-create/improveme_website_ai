import { NextResponse, type NextRequest } from 'next/server'

import { createClient } from './utils/supabase/middleware'

export async function middleware(request: NextRequest) {
  const { supabase, response } = createClient(request)

  // Touch the auth system so the session cookie refresh logic runs.
  // If you don't call an auth method, refresh won't happen.
  await supabase.auth.getUser()

  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}

