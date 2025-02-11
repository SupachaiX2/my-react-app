'use client'; // บอกว่าเป็น Client Component

import { useState } from 'react';

export default function Button() {
  const [count, setCount] = useState(0);

  return (
    <button
      onClick={() => setCount(count + 1)}
      className="px-4 py-2 bg-blue-500 text-white rounded"
    >
      คลิก {count} ครั้ง
    </button>
  );
}