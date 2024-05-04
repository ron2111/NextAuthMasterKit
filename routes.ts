// JS Documentation⬇️ : can ve viewed when hovered
/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to /settings
 * @type {string[]}
 */

export const authRoutes = ["/auth/login", "/auth/register"];

/**
 * The prefix for API authentication routes
 *  always allowed
 * @type {string[]}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * DEFAULT redirect path after loggin in
 * @type {string[]}
 */
export const DEFAULT_LOGIN_REDIRECT = "/settings";
