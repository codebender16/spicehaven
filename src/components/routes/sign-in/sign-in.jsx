import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
  auth,
} from "../../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUp from "../../sign-up-form/sign-up-form";

const SignIn = () => {
  useEffect(() => {
    // modify this block of code to clean function
    async function fetchData() {
      const response = await getRedirectResult(auth);
      console.log(response);

      if (response) {
        const userRef = await createUserDocumentFromAuth(response.user);
      }
    }
    fetchData();
  }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userRef = await createUserDocumentFromAuth(user);
    console.log(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
      <SignUp />
    </div>
  );
};

export default SignIn;
