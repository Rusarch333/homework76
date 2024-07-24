import React from 'react';

const PhonesView = ({ state }) => {
  const { items, isPending, error } = state;
  if (error) {
    return <p>error!!!</p>;
  }
  if (isPending) {
    return <p>loading....</p>;
  }
  return (
    <ul>
      {items.map(({ id, name, price }) => (
        <li key={id}>{name}  costs {price}$</li>
      ))}
    </ul>
  );
};

export default PhonesView;
