import React from 'react';
import {
  Popularpick1, Popularpick2, Popularpick3, Popularpick4,
} from 'Assets';
import { Button } from 'Components/atoms';

function PopularSquads() {
  return (
    <section className="py-5 bg-white poplular_sec">
      <div className="container container-xl">
        <div className="text-center title_h2">
          <h2 className="h2 mb-2 text-capitalize">Popular Squads</h2>
          <span>
            Check out our group squads to join one (or create one) based on your
            interests!
          </span>
        </div>
        <div className="row">
          <div className="col-lg-3 col-6 mb-3">
            <div className="position-relative card-block w-100">
              <figure>
                <img
                  src={Popularpick1}
                  alt="Spinnr"
                  width="200"
                  className="w-100"
                />
              </figure>
              <span className="total_users">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.022 11.3986C22.8038 11.9555 23.3094 12.675 23.3172 13.6371V13.6596V15.7593C23.3172 15.8436 23.2657 15.9183 23.1863 15.9482C21.7687 16.4684 20.2918 16.8036 18.7923 16.9436C18.8666 16.7123 18.9055 16.469 18.9055 16.2211V13.557C18.9055 12.5743 18.6394 11.6125 18.1426 10.7737C18.5868 10.6742 19.0144 10.5101 19.4128 10.2874C20.3129 10.513 21.2761 10.8674 22.022 11.3986Z"
                    stroke="white"
                  />
                  <path
                    d="M17.1177 3.42383C18.6415 3.42383 19.8792 4.66424 19.8792 6.18993C19.8792 7.71564 18.6417 8.95603 17.1177 8.95603C15.5886 8.95603 14.3516 7.71518 14.3516 6.18993C14.3516 4.66449 15.5885 3.42383 17.1177 3.42383Z"
                    stroke="white"
                  />
                  <path
                    d="M12.6794 4.22076C12.6794 6.25879 11.0229 7.91545 8.98473 7.91545C6.94227 7.91545 5.29004 6.25935 5.29004 4.22076C5.29004 2.17723 6.94262 0.521484 8.98473 0.521484C11.0226 0.521484 12.6794 2.17759 12.6794 4.22076Z"
                    stroke="white"
                  />
                  <path
                    d="M15.2614 10.5436C16.2801 11.269 16.958 12.2219 16.9718 13.5167V13.5569V16.2211C16.9718 16.4043 16.8587 16.5661 16.6879 16.6287L16.6878 16.6288C11.7132 18.4543 6.25036 18.4544 1.27112 16.6287C1.10127 16.5662 0.988281 16.4046 0.988281 16.2213V13.5579C0.992587 12.2393 1.67483 11.2739 2.70339 10.542C3.68979 9.84015 4.96287 9.38027 6.14931 9.08105C7.90068 10.1027 10.0684 10.1027 11.8198 9.08118C13.0021 9.38048 14.275 9.84133 15.2614 10.5436Z"
                    stroke="white"
                  />
                </svg>
                12
              </span>
              <div className="card_title text-white">
                <h3 className="h5 text-capitalize text-white mb-2">
                  Book Lover 👉👌
                </h3>
                <div className="tags_block">
                  <span className="tags">Community</span>
                  <span className="tags">College</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-3">
            <div className="position-relative card-block w-100">
              <figure>
                <img
                  src={Popularpick2}
                  alt="Spinnr"
                  width="200"
                  className="w-100"
                />
              </figure>
              <span className="total_users">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.022 11.3986C22.8038 11.9555 23.3094 12.675 23.3172 13.6371V13.6596V15.7593C23.3172 15.8436 23.2657 15.9183 23.1863 15.9482C21.7687 16.4684 20.2918 16.8036 18.7923 16.9436C18.8666 16.7123 18.9055 16.469 18.9055 16.2211V13.557C18.9055 12.5743 18.6394 11.6125 18.1426 10.7737C18.5868 10.6742 19.0144 10.5101 19.4128 10.2874C20.3129 10.513 21.2761 10.8674 22.022 11.3986Z"
                    stroke="white"
                  />
                  <path
                    d="M17.1177 3.42383C18.6415 3.42383 19.8792 4.66424 19.8792 6.18993C19.8792 7.71564 18.6417 8.95603 17.1177 8.95603C15.5886 8.95603 14.3516 7.71518 14.3516 6.18993C14.3516 4.66449 15.5885 3.42383 17.1177 3.42383Z"
                    stroke="white"
                  />
                  <path
                    d="M12.6794 4.22076C12.6794 6.25879 11.0229 7.91545 8.98473 7.91545C6.94227 7.91545 5.29004 6.25935 5.29004 4.22076C5.29004 2.17723 6.94262 0.521484 8.98473 0.521484C11.0226 0.521484 12.6794 2.17759 12.6794 4.22076Z"
                    stroke="white"
                  />
                  <path
                    d="M15.2614 10.5436C16.2801 11.269 16.958 12.2219 16.9718 13.5167V13.5569V16.2211C16.9718 16.4043 16.8587 16.5661 16.6879 16.6287L16.6878 16.6288C11.7132 18.4543 6.25036 18.4544 1.27112 16.6287C1.10127 16.5662 0.988281 16.4046 0.988281 16.2213V13.5579C0.992587 12.2393 1.67483 11.2739 2.70339 10.542C3.68979 9.84015 4.96287 9.38027 6.14931 9.08105C7.90068 10.1027 10.0684 10.1027 11.8198 9.08118C13.0021 9.38048 14.275 9.84133 15.2614 10.5436Z"
                    stroke="white"
                  />
                </svg>
                12
              </span>
              <div className="card_title text-white">
                <h3 className="h5 text-capitalize text-white mb-2">
                  Friendship Squad
                </h3>
                <div className="tags_block">
                  <span className="tags">Community</span>
                  <span className="tags">College</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-3">
            <div className="position-relative card-block w-100">
              <figure>
                <img
                  src={Popularpick3}
                  alt="Spinnr"
                  width="200"
                  className="w-100"
                />
              </figure>
              <span className="total_users">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.022 11.3986C22.8038 11.9555 23.3094 12.675 23.3172 13.6371V13.6596V15.7593C23.3172 15.8436 23.2657 15.9183 23.1863 15.9482C21.7687 16.4684 20.2918 16.8036 18.7923 16.9436C18.8666 16.7123 18.9055 16.469 18.9055 16.2211V13.557C18.9055 12.5743 18.6394 11.6125 18.1426 10.7737C18.5868 10.6742 19.0144 10.5101 19.4128 10.2874C20.3129 10.513 21.2761 10.8674 22.022 11.3986Z"
                    stroke="white"
                  />
                  <path
                    d="M17.1177 3.42383C18.6415 3.42383 19.8792 4.66424 19.8792 6.18993C19.8792 7.71564 18.6417 8.95603 17.1177 8.95603C15.5886 8.95603 14.3516 7.71518 14.3516 6.18993C14.3516 4.66449 15.5885 3.42383 17.1177 3.42383Z"
                    stroke="white"
                  />
                  <path
                    d="M12.6794 4.22076C12.6794 6.25879 11.0229 7.91545 8.98473 7.91545C6.94227 7.91545 5.29004 6.25935 5.29004 4.22076C5.29004 2.17723 6.94262 0.521484 8.98473 0.521484C11.0226 0.521484 12.6794 2.17759 12.6794 4.22076Z"
                    stroke="white"
                  />
                  <path
                    d="M15.2614 10.5436C16.2801 11.269 16.958 12.2219 16.9718 13.5167V13.5569V16.2211C16.9718 16.4043 16.8587 16.5661 16.6879 16.6287L16.6878 16.6288C11.7132 18.4543 6.25036 18.4544 1.27112 16.6287C1.10127 16.5662 0.988281 16.4046 0.988281 16.2213V13.5579C0.992587 12.2393 1.67483 11.2739 2.70339 10.542C3.68979 9.84015 4.96287 9.38027 6.14931 9.08105C7.90068 10.1027 10.0684 10.1027 11.8198 9.08118C13.0021 9.38048 14.275 9.84133 15.2614 10.5436Z"
                    stroke="white"
                  />
                </svg>
                12
              </span>
              <div className="card_title text-white">
                <h3 className="h5 text-capitalize text-white mb-2">
                  Love Group 💋
                </h3>
                <div className="tags_block">
                  <span className="tags">Community</span>
                  <span className="tags">College</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-3">
            <div className="position-relative card-block w-100">
              <figure>
                <img
                  src={Popularpick4}
                  alt="Spinnr"
                  width="200"
                  className="w-100"
                />
              </figure>
              <span className="total_users">
                <svg
                  width="24"
                  height="19"
                  viewBox="0 0 24 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.022 11.3986C22.8038 11.9555 23.3094 12.675 23.3172 13.6371V13.6596V15.7593C23.3172 15.8436 23.2657 15.9183 23.1863 15.9482C21.7687 16.4684 20.2918 16.8036 18.7923 16.9436C18.8666 16.7123 18.9055 16.469 18.9055 16.2211V13.557C18.9055 12.5743 18.6394 11.6125 18.1426 10.7737C18.5868 10.6742 19.0144 10.5101 19.4128 10.2874C20.3129 10.513 21.2761 10.8674 22.022 11.3986Z"
                    stroke="white"
                  />
                  <path
                    d="M17.1177 3.42383C18.6415 3.42383 19.8792 4.66424 19.8792 6.18993C19.8792 7.71564 18.6417 8.95603 17.1177 8.95603C15.5886 8.95603 14.3516 7.71518 14.3516 6.18993C14.3516 4.66449 15.5885 3.42383 17.1177 3.42383Z"
                    stroke="white"
                  />
                  <path
                    d="M12.6794 4.22076C12.6794 6.25879 11.0229 7.91545 8.98473 7.91545C6.94227 7.91545 5.29004 6.25935 5.29004 4.22076C5.29004 2.17723 6.94262 0.521484 8.98473 0.521484C11.0226 0.521484 12.6794 2.17759 12.6794 4.22076Z"
                    stroke="white"
                  />
                  <path
                    d="M15.2614 10.5436C16.2801 11.269 16.958 12.2219 16.9718 13.5167V13.5569V16.2211C16.9718 16.4043 16.8587 16.5661 16.6879 16.6287L16.6878 16.6288C11.7132 18.4543 6.25036 18.4544 1.27112 16.6287C1.10127 16.5662 0.988281 16.4046 0.988281 16.2213V13.5579C0.992587 12.2393 1.67483 11.2739 2.70339 10.542C3.68979 9.84015 4.96287 9.38027 6.14931 9.08105C7.90068 10.1027 10.0684 10.1027 11.8198 9.08118C13.0021 9.38048 14.275 9.84133 15.2614 10.5436Z"
                    stroke="white"
                  />
                </svg>
                12
              </span>
              <div className="card_title text-white">
                <h3 className="h5 text-capitalize text-white mb-2">
                  Light of love💏 😘
                </h3>
                <div className="tags_block">
                  <span className="tags">Community</span>
                  <span className="tags">College</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <Button type="button" size="medium">View More</Button>
          {/* <button
            className="btn btn-md btn-primary text-capitalize rounded-50"
            type="button"
          >
            View More
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default PopularSquads;
