// pages/topics/[slug].js

export async function getStaticPaths() {
  // If you have a data file, keep this function as-is.
  // For now, we’ll assume you have topics defined elsewhere.
  return {
    paths: [],   // no prebuilt paths needed if you’re adding manually
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // We’re not loading any data here.
  return {
    props: {},
  };
}

export default function TopicPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold">Notes</h1>
    </div>
  );
}
