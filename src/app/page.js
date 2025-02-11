import PostList from './components/PostList';

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">🚀 React Server Components</h1>
      <PostList />
    </main>
  );
}