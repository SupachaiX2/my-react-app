import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'


import Header from './Header';
import Button from './Button';


function Home() {
  return (
    <div>
      <Header title="สวัสดี React" />
      <h1> Hello React </h1>
      <h2>หน้าหลัก</h2>

    </div>
  );
}
function About() {

  const handleClick = () => {
    alert('ปุ่มถูกคลิ้กแล้ว!');
  };

  return (
    <div>
        <h2>เกี่ยวกับเรา</h2>
        <Button label={"คลิ้กเพื่อดู"} onClick={handleClick}/>
    </div>
  );
}
function Greeting(){
  const user = {
    name: 'John Doe',
    age: 25,
  };

  return (
    <div>
      <Header title="React Workshop" />
      <p>ชื่อ: {user.name}, อายุ: {user.age}</p>
      <Button label="ตกลง" onClick={() => alert('สวัสดี ' + user.name)} />
    </div>
  );

}




import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useDispatch, useSelector } from 'react-redux';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => { state.value += 1; },
    decrement: (state) => { state.value -= 1; }
  }
});

const store = configureStore({ reducer: { counter: counterSlice.reducer } });

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(counterSlice.actions.increment())}>+</button>
      <button onClick={() => dispatch(counterSlice.actions.decrement())}>-</button>
    </div>
  );
}

function StoreA(){
  return (
    <Provider store={store}>
    <Counter />
    </Provider>
  );
}


import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import DataFetcher from './components/DataFetcher';
import './index.css';

const queryClient = new QueryClient();

function QueryClientA(){
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-6">React API Example</h1>
        <DataFetcher />
      </div>
    </QueryClientProvider>
  );
}



import Posts from './components/Posts';

function PostsA(){
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container mx-auto p-6">
        <Header title="React Workshop" />
        <p className="mb-4">เรียนรู้พื้นฐานของ React ผ่านการปฏิบัติจริง</p>
        <Posts />
      </div>
    </QueryClientProvider>
  );
}


import PostList from './app/components/PostList';

function Home_PostList() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">🚀 React Server Components</h1>
      <PostList />
    </main>
  );
}

function App() {

  //Server Home_PostList
  return (
    <Home_PostList/>
  );

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/Greeting">Greeting</Link> | 
        <Link to="/store">Store</Link> | 
        <Link to="/Posts">Posts</Link> | 
        <Link to="/queryClient">queryClient</Link>
      </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/greeting" element={<Greeting />} />
      <Route path="/store" element={<StoreA />} />
      <Route path="/Posts" element={<PostsA />} />
      <Route path="/queryClient" element={<QueryClientA />} />
    </Routes>
  </Router>
  );

}

export default App