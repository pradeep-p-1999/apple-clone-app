export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-200 via-blue-100 to-gray-300 flex items-center justify-center p-0">
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
        <p className="text-2xl font-semibold text-gray-800 mb-2">Oops! Page not found.</p>
        <p className="text-lg text-gray-600 mb-6">Looks like you took a wrong turn. But don’t worry, you’re still awesome!</p>
        <img
          src="https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif"
          alt="Lost"
          className="w-64 h-64 rounded-lg shadow-lg mb-6"
        />
        <a
          href="/"
          className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700 transition font-bold"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}