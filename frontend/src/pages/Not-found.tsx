import { Link } from "react-router-dom";
import { CircleAlert } from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 gap-6 px-8 py-20 text-center">
        <div className="flex items-center gap-4">
          <span className="text-9xl font-bold text-red-500">4</span>
          <CircleAlert size={96} className="text-red-500" />
          <span className="text-9xl font-bold text-red-500">4</span>
        </div>
        <h1 className="text-4xl font-bold">Oops! Page Not Found</h1>
        <p className="text-zinc-400 max-w-md">
          The page you are looking for does not exist or has been moved. Let's
          get you back to the movies.
        </p>
        <Link
          to="/"
          className="mt-2 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-md transition-colors"
        >
          Back to Home
        </Link>
      </main>
      <Footer />
    </div>
  );
}