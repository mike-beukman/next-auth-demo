// auth.config.ts
import type { NextAuthConfig } from "next-auth";

// Define protected routes in one place
const protectedRoutes = ["/dashboard", "/settings", "/profile"];
const authRoutes = ["/login", "/register"]; // Routes only for logged-out users

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const path = nextUrl.pathname;

      // Check if current path starts with any protected route
      const isProtectedRoute = protectedRoutes.some((route) =>
        path.startsWith(route)
      );

      // Check if current path is an auth route (login/register)
      const isAuthRoute = authRoutes.some((route) => path.startsWith(route));

      // Protect routes - redirect to login if not authenticated
      if (isProtectedRoute && !isLoggedIn) {
        return false;
      }

      // Redirect logged-in users away from auth pages
      if (isAuthRoute && isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
