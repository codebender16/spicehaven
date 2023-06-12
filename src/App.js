import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/home/home";
import Navigation from "./components/routes/navigation/navigation";
import Authentication from "./components/routes/authentication/authentication";

const Shop = () => {
  return <div>I am a shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
