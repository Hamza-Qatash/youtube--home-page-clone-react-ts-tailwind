import React, { useState } from "react";
import { Video, CategoryPills } from "../../components";
import { categories, videos } from "../../data/home";

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="px-3 overflow-x-hidden">
      <CategoryPills
        categories={categories}
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <div className="grid gap-6 sm:gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-6 pr-5">
        {videos.map((video) => (
          <Video key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Main;
