import Link from 'next/link';

export default function LinkButton({ href, children }) {
  return (
    <Link href={href}>
      <button className="px-8 py-3 text-lg text-white transition duration-300 bg-black rounded-full hover:bg-gray-800">
        {children}
      </button>
    </Link>
  );
}
