import { Fragment, useEffect, useState } from "react";
import MetaData from "../layouts/MetaData";
import { useDispatch, useSelector } from "react-redux";
import {
  clearAuthError,
  clearAuthSuccess,
  forgotPassword as forgotPasswordAction,
} from "../../actions/userActions";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const { error, message } = useSelector((state) => state.authState);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      email,
    };
    dispatch(forgotPasswordAction(data));
  };

  useEffect(() => {
    if (message) {
      const succss = async () => {
        return toast(message, {
          position: "bottom-center",
          type: "success",
          onOpen: () => {
            dispatch(clearAuthSuccess);
          },
        });
      };
      setEmail("");
      succss();
    }

    if (error) {
      const err = async () => {
        return toast(error, {
          position: "bottom-center",
          type: "error",
          onOpen: () => {
            dispatch(clearAuthError);
          },
        });
      };
      err();
    }
  }, [message, error, dispatch]);

  return (
    <Fragment>
      <MetaData title={"Forgot Password"} />
      <div className="row wrapper">
        <div className="col-10 col-lg-5">
          <form onSubmit={submitHandler} className="shadow-lg">
            <h1 className="mb-3">Forgot Password</h1>
            <div className="form-group">
              <label htmlFor="email_field">Enter Email</label>
              <input
                type="email"
                id="email_field"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              id="forgot_password_button"
              type="submit"
              className="btn btn-block py-3"
            >
              Send Email
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
}
