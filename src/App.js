import React from 'react';
import './index.css';
import img1 from './images/11.png';
import img2 from './images/12.png';
import img3 from './images/13.png';
import img4 from './images/14.png';
import './App.css';

const products = [
  {
    id: 1,
    image: img1,
    count: 61,
    title: 'Haught or not',
    description: 'High-minded or absent-minded? You Decide',
    submittedBy: 'John Doe',
  },
  {
    id: 2,
    image: img2,
    count: 54,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn Points when your favorite politicians pass legislature.',
    submittedBy: 'Jane Smith',
  },
  {
    id: 3,
    image: img3,
    count: 27,
    title: 'Haught or not',
    description: 'High-minded or absent-minded? You Decide',
    submittedBy: 'Robert Johnson',
  },
  {
    id: 4,
    image: img4,
    count: 6,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn Points when your favorite politicians pass legislature.',
    submittedBy: 'Mary Brown',
  },
];

const App = () => {
  return (
    <div>
      <p className="heading">Popular Products</p>
      <hr />
      <table className="tablex" style={{ margin: 'auto' }}>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              <img src={product.image} alt={`Image ${product.id}`} width="280" height="150" />
            </td>
            <td style={{ textAlign: 'left' }} className="mrgnryt">
              {product.count}
            </td>
            <td>
              <p style={{ textAlign: 'left' }} className="fnt">
                {product.title}
              </p>
              <br />
              <p style={{ textAlign: 'left' }} className="bold">
                {product.description}
              </p>
              <br />
              <p style={{ textAlign: 'left' }}>Submitted by: {product.submittedBy}</p>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
