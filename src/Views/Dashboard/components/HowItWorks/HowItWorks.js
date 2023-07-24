import { ChatIcon, FindFriends, ProfileIcon } from 'Assets';
import React from 'react';

function HowItWorks() {
  return (
    <section className="py-5 bg-light-pink how_work_sec">
      <div className="container container-xl">
        <div className="text-center title_h2">
          <h2 className="h2 mb-2 text-capitalize"> How Does it Works?</h2>
          <span>
            Check out our group squads to join one (or create one) based on your
            interests!
          </span>
        </div>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="bg-white text-center work_card">
              <em>
                <img
                  src={ProfileIcon}
                  alt="Create a Profile"
                  title="Create a Profile"
                  className="img-fluid"
                />
              </em>
              <h4 className="h5">Create a Profile</h4>
              <p>
                Our signup process is super simple and if you want to stand out,
                we encourage you to create a video profile!
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white text-center work_card">
              <em>
                <img
                  src={FindFriends}
                  alt="Find Friends"
                  title="Find Friends"
                  className="img-fluid"
                />
              </em>
              <h4 className="h5">Find Friends</h4>
              <p>
                Watch video profiles, join squads, and search for people who
                share your hobbies and interests!
              </p>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-white text-center work_card">
              <em>
                <img
                  src={ChatIcon}
                  alt="Start Chats"
                  title="Start Chats"
                  className="img-fluid"
                />
              </em>
              <h4 className="h5">Start Chats</h4>
              <p>
                Send video, audio, and text messages in 1-on-1 chats, or squad
                chats. You’re just one message away from a new friend!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
