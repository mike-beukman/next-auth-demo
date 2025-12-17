import { auth } from "@/auth";
import { LogoutButton } from "../Actions/LogoutButton";
import Link from "next/link";
import Image from "next/image";

export const Navigation = async () => {
  const session = await auth();

  console.log(session);
  return (
    <header className="border-b border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          Home
        </Link>
        <Link
          href="/dashboard"
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          Dashboard
        </Link>
        <Link
          href="/client-page"
          className="text-xl font-semibold text-gray-900 dark:text-white"
        >
          Client page
        </Link>
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Welcome, {session?.user?.name || "User"}
              </span>

              {session?.user?.image ? (
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name || "User"}
                  width={32}
                  height={32}
                />
              ) : (
                <div className="h-8 w-8 rounded-full bg-linear-to-br from-violet-500 to-fuchsia-500" />
              )}
            </>
          ) : (
            <Link href="/api/auth/signin">Login</Link>
            // <Link href="/login">Login</Link>
          )}
        </div>
        {session?.user && <LogoutButton />}
      </div>
    </header>
  );
};
