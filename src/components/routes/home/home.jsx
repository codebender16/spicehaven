import { Outlet } from "react-router-dom";
import Directory from "../../directory/directory";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Indian",
      imageUrl: "https://i.ibb.co/nkSpNY7/indian-spice.jpg",
    },
    {
      id: 2,
      title: "Mediterranean",
      imageUrl: "https://i.ibb.co/Z13R27Z/mediterranean-spice.jpg",
    },
    {
      id: 3,
      title: "Si Chuan",
      imageUrl: "https://i.ibb.co/wNp7909/sichuan-spice.jpg",
    },
    {
      id: 4,
      title: "Malaysian",
      imageUrl: "https://i.ibb.co/P6514Xp/malaysian-spice.jpg",
    },
    {
      id: 5,
      title: "Western",
      imageUrl: "https://i.ibb.co/6rXF5KQ/western-spice.jpg",
    },
  ];

  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
