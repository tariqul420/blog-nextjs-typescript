import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex items-center justify-center flex-col space-y-3">
      <h2 className="text-5xl text-red-500">Not Found</h2>
      <p>Could not find requested resource</p>
      <Link className="btn btn-neutral" href="/">
        Return Home
      </Link>
    </div>
  );
}
