import React from 'react';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

// ✅ Server Component
export default async function PostList() {
  const posts = await fetchPosts();

  return (
    <div>
      <h2 className="text-xl font-bold">📜 รายการโพสต์</h2>
      <ul>
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="border-b p-2">
            <h3 className="text-lg font-semibold">{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}