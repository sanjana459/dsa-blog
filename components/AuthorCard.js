// components/AuthorCard.js
import Image from 'next/image';
import Link from 'next/link';

export default function AuthorCard({
  name,
  profileUrl,
  imageSrc = '/profile.jpg',
}) {
  // Format today’s date as "May 30, 2025"
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="flex items-center space-x-4 py-6">
      <Image
        src={imageSrc}
        alt={name}
        width={48}
        height={48}
        className="rounded-full"
        priority
      />
      <div>
        <Link
          href={profileUrl}
          className="font-semibold text-lg hover:underline"
        >
          {name}
        </Link>
        <p className="text-sm text-gray-600">{today}</p>
      </div>
    </div>
  );
}
