import React from 'react';
import {
  ChatFrndIcon,
} from 'Assets';

function AIChatComponent() {
  return (
    <section className="chat_friend_sec">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <figure className="mb-md-0">
              <img
                src={ChatFrndIcon}
                alt="Chat Friend"
                width="300"
                className="w-100"
              />
            </figure>
          </div>
          <div className="col-md-6">
            <div className="chat_summary">
              <h4 className="h3 text-white mb-3">
                Spinny - Your A.I. Chat Friend
              </h4>
              <p>
                By joining Spinnr, you automatically become friends with
                Spinny, your personal A.I. Chat Friend. Powered by ChatGPT,
                you'll be able to ask him any type of question. You can learn
                a new recipe, or a new language, find a great restaurant in
                your city, or write a story for your kids. Spinny will provide
                you with friendship, information, and anything else your
                creative mind can think of!
              </p>
              <button
                className="btn btn-md btn-primary text-capitalize rounded-50"
                type="button"
              >
                Chat with Spinny!
                {' '}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIChatComponent;
