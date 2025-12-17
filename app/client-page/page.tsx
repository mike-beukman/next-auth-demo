"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ClientPage() {
  const { data: session, status, update } = useSession();

  return (
    <div className="min-h-screen p-8 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">useSession Demo</h1>

      {/* Status Indicator */}
      <div className="mb-6 p-4 rounded-lg border">
        <h2 className="text-lg font-semibold mb-2">Session Status</h2>
        <div className="flex items-center gap-2">
          <span
            className={`w-3 h-3 rounded-full ${
              status === "authenticated"
                ? "bg-green-500"
                : status === "loading"
                ? "bg-yellow-500"
                : "bg-red-500"
            }`}
          />
          <span className="font-mono">{status}</span>
        </div>
      </div>

      {/* Loading State */}
      {status === "loading" && (
        <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg mb-6">
          <p>⏳ Loading session...</p>
        </div>
      )}

      {/* Unauthenticated State */}
      {status === "unauthenticated" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <p className="mb-4">❌ You are not signed in</p>
          <button
            onClick={() => signIn()}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Sign In
          </button>
        </div>
      )}

      {/* Authenticated State */}
      {status === "authenticated" && session && (
        <div className="space-y-6">
          {/* User Info */}
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <h2 className="text-lg font-semibold mb-3">✅ Authenticated</h2>
            <div className="space-y-2">
              {session.user?.image && (
                <img
                  src={session.user.image}
                  alt="Avatar"
                  className="w-16 h-16 rounded-full"
                />
              )}
              <p>
                <span className="font-medium">Name:</span>{" "}
                {session.user?.name || "N/A"}
              </p>
              <p>
                <span className="font-medium">Email:</span>{" "}
                {session.user?.email || "N/A"}
              </p>
            </div>
          </div>

          {/* Raw Session Data */}
          <div className="p-4 bg-gray-50 border rounded-lg">
            <h2 className="text-lg font-semibold mb-3">
              📦 Raw Session Object
            </h2>
            <pre className="text-sm overflow-auto bg-gray-900 text-green-400 p-4 rounded">
              {JSON.stringify(session, null, 2)}
            </pre>
          </div>

          {/* Actions */}
          <div className="p-4 border rounded-lg">
            <h2 className="text-lg font-semibold mb-3">🔧 Actions</h2>
            <div className="flex gap-3">
              <button
                onClick={() => update()}
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
              >
                Refresh Session
              </button>
              <button
                onClick={() => signOut()}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Code Example */}
      <div className="mt-8 p-4 bg-gray-900 text-gray-100 rounded-lg">
        <h2 className="text-lg font-semibold mb-3 text-white">💻 Code Used</h2>
        <pre className="text-sm overflow-auto">
          {`"use client";

import { useSession, signIn, signOut } from "next-auth/react";

export default function ClientPage() {
  const { data: session, status, update } = useSession();

  if (status === "loading") return <p>Loading...</p>;
  if (status === "unauthenticated") return <button onClick={() => signIn()}>Sign In</button>;

  return (
    <div>
      <p>Welcome, {session?.user?.name}!</p>
      <button onClick={() => update()}>Refresh</button>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}`}
        </pre>
      </div>
    </div>
  );
}
