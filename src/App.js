import "./App.css";
import CategoryItem from "./components/category-item/category-item";
import "./categories.scss";

const App = () => {
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
    <div className="categories-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default App;
