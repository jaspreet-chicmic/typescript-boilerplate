// const ForgotPassword = () => 'forgot password page';
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
// import { useForm } from 'react-hook-form'
import '../Login/style.scss';
import { Logo, ShowPassword } from 'Assets';

function ForgotPassword() {
// const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const handleSubmit = () => {
    //
  };
  return (
    <div className="overflow-hidden front_form min-vh-100">
      <div className="ls_form">
        <div className="text-center d-block mb-4">
          <span className="logo_front">
            <img src={Logo} alt="Spinnr" width="200" />
          </span>
          <h1 className="h6 text-capitalize">Forgot Password</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label>Email</label>
            <div className="position-relative">
              <input type="text" placeholder="email/phone" className="form-control" />
            </div>
            <span className="d-block error">This field is required</span>
          </div>

          <div className="mb-4 text-center">
            <button type="button" className="btn btn-md btn-primary text-captialize rounded-50">Send</button>
          </div>

          <div className="text-center text-mute">
            <span className="link_text ps-2">Login</span>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
