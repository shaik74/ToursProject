import React from 'react';
import Tour from './Tour';
let Tours = ({ tours }) => {
  console.log(tours);
  return (
    <section>
      <div className="title">
        <h2> Our Tours</h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;