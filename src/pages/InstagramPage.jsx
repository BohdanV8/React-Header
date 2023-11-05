import React from "react";

const InstagramPage = () => {
  return (
    <div className="container text-center mt-5">
      <h1>Instagram</h1>
      <video controls autoplay muted loop>
        <source
          src="https://www.instagram.com/p/CzOtL9JLQvF/"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default InstagramPage;
