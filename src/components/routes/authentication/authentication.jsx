import SignUp from "../../sign-up-form/sign-up-form";
import SignIn from "../../sign-in-form/sign-in-form";

import "./authentication.scss";

const Authentication = () => {
  // useEffect(() => {
  //   // modify this block of code to clean function
  //   async function fetchData() {
  //     const response = await getRedirectResult(auth);
  //     console.log(response);

  //     if (response) {
  //       const userRef = await createUserDocumentFromAuth(response.user);
  //     }
  //   }
  //   fetchData();
  // }, []);

  return (
    <div className="authentication-container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Authentication;
