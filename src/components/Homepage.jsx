import React from "react";
import { FaBlog } from "react-icons/fa";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
  selectSignedIn,
  setSignedIn,
  setUserData,
} from "../features/userSlice";
import "../styles/home.css";

const Homepage = () => {
  const dispatch = useDispatch();
  const login = (res) => {
    console.log(res);
    // never put console.logs in the code commit
    dispatch(setSignedIn(true));
    dispatch(setUserData(res.profileObj));
  };
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="home_page" style={{ display: isSignedIn ? "none" : "" }}>
      {!isSignedIn ? (
    // convert this to !isSignedIn && ( syntax if you have nothing in the else case
        <div className="login_message">
          <h2>
            <FaBlog />
          </h2>
          <h1>A Readers favourite place!</h1>
          <p>
            We provide high quality online resource for reading blogs. Just sign
            in and start reading some quality blogs.
          </p>
          <GoogleLogin
            clientId="913417509664-637go63gv2nu9qdpibtd3nv7s4qnqmbh.apps.googleusercontent.com"
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login_button"
              >
                Login With Google
              </button>
            )}
            onSuccess={login}
            onFailure={login}
            isSignedIn={true}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Homepage;
