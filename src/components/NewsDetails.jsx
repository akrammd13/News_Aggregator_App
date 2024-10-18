import { useLocation } from "react-router-dom";
import Comments from "./Comments";

function NewsDetails() {
  const location = useLocation();

  //   console.log(location);

  return (
    <div className="grid grid-cols-2">
      <div className="p-5">
        <h1 className="font-extrabold text-2xl">{location.state.data.title}</h1>
        <h4 className="my-3">{location.state.data.description}</h4>
        <img src={location.state.data.urlToImage} alt="news-image" />
        <p className="mt-3">{location.state.data.content}</p>
        <h6 className="text-sm font-bold my-1">Author : {location.state.data.author}</h6>
        <h6 className="text-sm font-bold">
          Published : {location.state.data.publishedAt}
        </h6>
        <div className="mt-3">
          <a
            href={location.state.data.url}
            className="font-bold text-md underline text-sky-900	"
            target="_blank"
          >
            Article Resource
          </a>
        </div>
      </div>
      <div>
        <Comments url={location.state.data.url} />
      </div>
    </div>
  );
}

export default NewsDetails;
