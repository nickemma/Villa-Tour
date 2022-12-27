import React from 'react';
import Image from 'next/image';

interface Props {
  imageFile: string;
  description: string;
  title: string;
  tags: string[];
  creator: string;
  _id: string;
}

const Card: React.FC<Props> = ({
  imageFile,
  description,
  title,
  tags,
  creator,
  _id,
}) => {
  return (
    <div className="card">
      <div className="card_image">
        <Image src={imageFile} alt="image" width={400} height={400} />
      </div>
      <div className="card_content">
        <div className="card_title">{title}</div>
        <p className="card_text">{description}</p>
        <div className="card_tags">
          {tags.map((tag, index) => (
            <span key={index} className="card_tag">
              #{tag}
            </span>
          ))}
        </div>
        <div className="card__author">
          <h2 className="card__author-name">{creator}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
