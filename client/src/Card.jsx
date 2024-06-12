import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="left-card">
        <div className="image">
          <img src={props.photo} alt={props.title} id="main-photo" />
        </div>
      </div>
      <div className="right-card">
        <div className="information">
          <div className="title">{props.title}</div>
          <div className="description">{props.description}</div>
          <div className="more-info">
            <a href={props.url} target="_blank" rel="noopener noreferrer">
              อ่านต่อ
            </a>
            <div className="tags">
              <p className="tag">หมวด:</p>
              {props.tags.map((tag, index) => (
                <p
                  key={index}
                  className="underline mr-4 cursor-pointer"
                  onClick={() => props.handleCategoryClick(tag)}
                >
                  {tag}
                </p>
              ))}
            </div>
            <div className="imageList">
              {props.photos.map((photo, index) => (
                <img
                  key={index}
                  className="img-list"
                  src={photo}
                  alt={`${props.title} photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
