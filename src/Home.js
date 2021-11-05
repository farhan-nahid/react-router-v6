import React from 'react';
import { useNavigate } from 'react-router-dom';

const number = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home</h1>
      {number.map((num) => (
        <div key={num.id}>
          <h1>{num.id}</h1>
          <button onClick={() => navigate(`/num/${num.id}`)}>Click me</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
