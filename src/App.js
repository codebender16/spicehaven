import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/routes/home/home";
import Navigation from "./components/routes/navigation/navigation";
import SignIn from "./components/routes/sign-in/sign-in";

const Shop = () => {
  return <div>I am a shop</div>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
