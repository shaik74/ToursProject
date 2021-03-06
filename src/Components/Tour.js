import React from 'react';

const Tour = ({ id, image, name, url, price, info }) => {
  return (
    <>
      <article calssName="single-tour">
        <img src={image} alt={name} />
        <footer>
          <div calssName="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>{info}</p>
          <button className="btn-delete">Not interested</button>
        </footer>
      </article>
    </>
  );
};

export default Tour;