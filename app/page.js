// /app/index.js
import Link from 'next/link';
import Home from './Home/page';
export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
        <h1 className="text-4xl font-bold mb-5">Online Survey and Feedback System</h1>
        <div className="text-lg">
          <ul>
            <li className="hover:text-green-400 hover:underline">
              <Link href="/Home"> {/* Adjust the href path */}
                Start Survey
              </Link></li>

              <li className="hover:text-green-400 hover:underline">
              <Link href="/Feedback"> {/* Adjust the href path */}
                Leave Feedback
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Home />
    </main>
  );
}
