// pages/index.js

import AuthorCard       from '../components/AuthorCard';
import FixedTopicWindow from '../components/FixedTopicWindow';
import TopicCard        from '../components/TopicCard';

// 1️⃣ Import your full list of topics
import { topics } from '../data/topics';

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      
      {/* 1) Author info (immediately after the banner) */}
      <AuthorCard
        name="Sanjana Gurrappagaru"
        profileUrl="https://www.linkedin.com/in/sanjana-gurrappagaru-949878243/"
        imageSrc="/profile.jpg"
      />

      {/* 2) DSA progress window */}
      <div className="mt-8">
        <FixedTopicWindow />
      </div>

      {/* 3) Featured Topics grid */}
      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Topics To Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((t) => (
            <TopicCard
              key={t.slug}
              slug={t.slug}
              title={t.name}           // use `name` from your data file
              description={t.description}
              daysDone={t.daysDone}
              totalDays={t.totalDays}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
