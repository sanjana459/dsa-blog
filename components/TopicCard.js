// components/TopicCard.js

import Link from 'next/link';
import ProgressBar from './ProgressBar';

export default function TopicCard({ slug, title, description, daysDone, totalDays }) {
  return (
    <Link
      href={`/topics/${slug}`}
      className="block border border-gray-200 rounded-lg shadow hover:shadow-lg transition"
    >
      <div className="p-4 flex flex-col h-full">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Optional description */}
        {description && (
          <p className="text-sm text-gray-600 mb-4 flex-grow">
            {description}
          </p>
        )}

        {/* Progress bar pinned to the bottom of the card */}
        <div className="mt-auto">
          <ProgressBar topic={title} daysDone={daysDone} totalDays={totalDays} />
        </div>
      </div>
    </Link>
  );
}
