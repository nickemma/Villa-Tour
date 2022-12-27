import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const excerpt = (text: string) => {
    if (text.length > 45) {
      return text.substring(0, 45) + '...';
    }
  };

  return (
    <div className="card">
      <div className="card_image">
        <img src={imageFile} alt="image" />
      </div>
      <div className="card_content">
        <h3 className="card_author">{creator}</h3>
        <div className="card_tags">
          {tags.map((tag, index) => (
            <span key={index} className="card_tag">
              #{tag}
            </span>
          ))}
        </div>
        <h3 className="card_title">{title}</h3>
        <p className="card_text">
          {excerpt(description)} <Link href={`/tour/${_id}`}>Read more</Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
