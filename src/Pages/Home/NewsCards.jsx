import { Link } from "react-router-dom";

const NewsCards = ({ news }) => {
  const { title,image_url,details,_id } = news;
  return (
    <div className="card bg-base-100 shadow-xl mb-5">
      <figure>
        <img className="w-full"
          src={image_url}
          alt=""
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
      {
        details.length > 200 ? <p>{details.slice(0,200)} <Link to={`/news/${_id}`} className=" btn btn-sm">Read More ...</Link></p>
        :
        <p>{details}</p>
      }
   
      </div>
    </div>
  );
};

export default NewsCards;
