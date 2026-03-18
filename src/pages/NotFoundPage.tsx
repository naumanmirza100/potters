import { Link } from 'react-router-dom';

export const NotFoundPage = () => (
  <div className="bg-zinc-100 min-h-[70vh] flex flex-col items-center justify-center gap-6 text-center px-4">
    <div className="text-8xl">🏺</div>
    <h1 className="text-blue-950 text-4xl font-bold">Page Not Found</h1>
    <p className="text-neutral-500 text-base max-w-sm">Sorry, the page you're looking for doesn't exist. Let's get you back to something beautiful.</p>
    <Link to="/" className="bg-blue-950 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-900 transition-colors btn-hover">
      Back to Home
    </Link>
  </div>
);
