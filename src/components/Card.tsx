import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import "../app/styles/card.css";

interface PropsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<PropsType> = ({ title, desc, img, tags }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Update the screen size state on mount and resize
    const updateScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    // Initial check
    updateScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", updateScreenSize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  return (
    <div className={`card ${isSmallScreen ? 'card-sm' : ''}`} data-aos="zoom-in-up">
      <div>
        <Image
          className={`card-image ${isSmallScreen ? 'card-image-sm' : ''}`}
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div>{desc}</div>
        <div>
          {tags.map((el) => (
            <div className="card-tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
