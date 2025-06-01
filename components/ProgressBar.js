// components/ProgressBar.js
export default function ProgressBar({ topic, daysDone, totalDays }) {
  // Calculate percentage (cap at 100%)
  const pct = Math.min(100, Math.floor((daysDone / totalDays) * 100));

  return (
    <div className="mb-6">
      {/* Label */}
      <div className="flex justify-between text-sm text-gray-700 mb-1">
        <span>{topic.toUpperCase()}</span>
        <span>{daysDone}/{totalDays} days</span>
      </div>
      {/* Bar track */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        {/* Filled portion */}
        <div
          className="bg-blue-500 h-2 rounded-full transition-width duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
