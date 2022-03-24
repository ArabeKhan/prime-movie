import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.style";

const Thumb = ({ image, title, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <>
            <Image src={image} />
            <h2>{title}</h2>
          </>
        </Link>
      ) : (
        <>
          <Image src={image} />
          {title && <h2>{title}</h2>}
        </>
      )}
    </div>
  );
};

export default Thumb;
