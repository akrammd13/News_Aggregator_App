import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../firebase/setup";
import defaultImg from "../images/news-image.jpg";

const Home = ({ menu, search }) => {
  const [news, setNews] = useState([]);

  const addNews = async(data) => {
    const newsDoc = doc(database, "News", `${data.url.substr(-10, 10)}`);
    try {
      await setDoc(newsDoc, {
        title: data.title,
        description: data.description
      })
    } catch (err) {
      console.error(err);
    }
  };

  // News API
  // https://newsapi.org/v2/top-headlines?country=us&category=${menu}&apiKey=${API_KEY}
  const getNews = () => {
    const API_KEY = "aedc4b23ff67478a9f853d0dacd52cab";
    fetch(
      `https://newsapi.org/v2/everything?q=${
        menu ? menu : "All"
      }&sortBy=popular&apiKey=${API_KEY}`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  // Newsdata.io
  // const getNews = () => {
  //   fetch("https://newsdata.io/api/1/latest?apikey=pub_50215c91873d6e8bfc0bbae03e3b24ec99efa&q=pizza")
  //     .then(res => res.json())
  //     .then(json => setNews(json.results));
  // };

  // gnews.io
  // const getNews = () => {
  //   fetch(
  //     "https://gnews.io/api/v4/search?q=example&apikey=64ffe15ca3994777cf047d70d171a408"
  //   )
  //     .then((res) => res.json())
  //     .then((json) => setNews(json.articles));
  // };

  console.log(news);

  useEffect(() => {
    getNews();
  }, [menu]);

  return (
    <div className="mt-12 p-5 grid grid-cols-4 gap-2">
      {news
        ?.filter((data) => data.title.includes(search))
        .map((data, index) => {
          return (
            <>
              <Link
                onClick={() => addNews(data)}
                to="/details"
                state={{ data: data }}
              >
                <div
                  key={index}
                  className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={data.urlToImage ? data.urlToImage : defaultImg}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-6 py-4 flex flex-col flex-grow">
                    <div className="font-bold text-xl mb-2 h-16 overflow-hidden">{data.title == "[Removed]" ? 'Local Business Owners Adapt to Changing Economic Landscape'.slice(0,50) : data.title.slice(0,50)}</div>
                    <p className="text-gray-700 text-base h-24 overflow-hidden">{data.content == "[Removed]" ? "A powerful earthquake measuring 7.8 on the Richter scale struck the coastal city of San Verde early this morning, causing widespread destruction and leaving thousands of residents displaced." : data.content}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default Home;
