import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCards from "./NewsCards";

const Home = () => {
  const newsData=useLoaderData()
  console.log(newsData);
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <NavBar></NavBar>

      <div className=" grid md:grid-cols-4 grid-cols-1 gap-6">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        {/* news container */}
        <div className=" md:col-span-2">
          {
            newsData.map(news => <NewsCards key={news.id} news={news}></NewsCards>)
          }
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
