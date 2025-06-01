// components/FixedTopicWindow.js
export default function FixedTopicWindow() {
  const topics = [
    { name: "Array/List – Coding Exercises (LeetCode + FAANG Questions)", done: false },
    { name: "Dictionary – Coding Exercises", done: false },
    { name: "Tuple – Coding Exercises", done: false },
    { name: "Linked List", done: false },
    { name: "Singly Linked List – Coding Exercises", done: false },
    { name: "Singly Linked List – LeetCode Questions", done: false },
    { name: "Circular Singly Linked List", done: false },
    { name: "Circular Singly Linked List – LeetCode Questions", done: false },
    { name: "Doubly Linked List", done: false },
    { name: "Circular Doubly Linked List", done: false },
    { name: "Cracking Linked List Interview Questions (Amazon, Facebook, Apple, Microsoft)", done: false },
    { name: "Stack", done: false },
    { name: "Queue", done: false },
    { name: "Cracking Stack and Queue Interview Questions (Amazon, Facebook, Apple, Microsoft)", done: false },
    { name: "Recursion", done: false },
    { name: "Cracking Recursion Interview Questions", done: false },
    { name: "Challenging Recursion Problems", done: false },
    { name: "Tree / Binary Tree", done: false },
    { name: "Binary Search Tree", done: false },
    { name: "AVL Tree", done: false },
    { name: "Binary Heap", done: false },
    { name: "Trie", done: false },
    { name: "Hashing", done: false },
    { name: "Sort Algorithms", done: false },
    { name: "Searching Algorithms", done: false },
    { name: "Graph Algorithms", done: false },
    { name: "Graph Traversal – BFS and DFS", done: false },
    { name: "Topological Sort Algorithm", done: false },
    { name: "Single Source Shortest Path", done: false },
    { name: "Dijkstra’s Algorithm", done: false },
    { name: "Bellman-Ford Algorithm", done: false },
    { name: "All Pairs Shortest Path", done: false },
    { name: "Floyd-Warshall Algorithm", done: false },
    { name: "Minimum Spanning Tree (Disjoint Set)", done: false },
    { name: "Kruskal and Prim’s Algorithms", done: false },
    { name: "Cracking Trees and Graphs Top Interview Questions (Apple, Amazon, Facebook)", done: false },
    { name: "Greedy Algorithms", done: false },
    { name: "Divide and Conquer Algorithms", done: false },
    { name: "Dynamic Programming", done: false },
    { name: "Challenging Dynamic Programming Problems", done: false },
    { name: "A Recipe for Problem Solving", done: false },
    { name: "Backtracking", done: false },
    { name: "The Wild West", done: false },
  ];

  return (
    <section
      className="
        w-full
        max-w-3xl         /* Up to ~48rem wide */
        mx-auto
        bg-white
        shadow-lg
        rounded-lg
        p-6
        h-[70vh]          /* Fixed height = 70% of viewport */
        overflow-y-auto   /* Scrollbar appears when content overflows */
      "
    >
      <h2 className="text-2xl font-semibold mb-4">My DSA Progress</h2>
      <ul className="space-y-3">
        {topics.map(({ name, done }) => (
          <li key={name} className="flex items-start">
            <input
              type="checkbox"
              checked={done}
              disabled
              className="mt-1 h-4 w-4 text-blue-600"
            />
            <span className="ml-2">{name}</span>
          </li>
        ))}
      </ul>

      {/* You can continue adding more sections below; they’ll scroll */}
    </section>
  );
}
