import BlogCategoryCard from "@/components/blogs/BlogCategoryCard";
import BlogPages from "@/components/blogs/BlogPage";
import LatestNews from "@/components/blogs/LatestNews";
import TrendingTopics from "@/components/blogs/TrendingTopics";
import WelcomeBox from "@/components/blogs/WelcomeBox";
import HorizontalScrollbar from "@/components/common/HorizontalScrollbar";
import React from "react";

const getItems = () =>
  Array(20)
    .fill(0)
    .map((_, ind) => ({ id: `element-${ind}` }));

function Blog() {
  return (
    <BlogPages>
      <WelcomeBox />
      <HorizontalScrollbar topic="Trending Topics">
        {[...getItems()?.map((item) => <TrendingTopics data={item} />)]}
      </HorizontalScrollbar>

      <HorizontalScrollbar topic="Latest News">
        {[...getItems()?.map((item) => <LatestNews data={item} />)]}
      </HorizontalScrollbar>

      <HorizontalScrollbar topic="Blog Category">
        {[...getItems()?.map((item) => <BlogCategoryCard data={item} />)]}
      </HorizontalScrollbar>
    </BlogPages>
  );
}

export default Blog;
