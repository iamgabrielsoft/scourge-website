/**
 * Checks whether the user currently has an active session in the Scourge app
 * by reading the `accessToken` cookie that the app backend sets on sign-in.
 *
 * The cookie is not httpOnly so JavaScript can read it, and its domain is set
 * to the apex domain (e.g. `.marketingvaults.cfd`) so the marketing site can see it
 * alongside the app subdomain.
 *
 * We intentionally do NOT validate the token here — if it's present we treat
 * the user as logged in. If it's actually expired the app will redirect them
 * to login when they click "Open App".
 */
export function useAuthState() {
  // useCookie is SSR-safe in Nuxt 3 — it reads from the request cookies on
  // the server and from document.cookie on the client.
  const token = useCookie("accessToken")

  const isLoggedIn = computed(() => !!token.value)

  return { isLoggedIn }
}
