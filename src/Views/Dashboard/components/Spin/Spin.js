import React from 'react';

function Spin() {
  return (
    <section className="bg-light-pink spin_sec">
      <div className="container container-xl">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="web_content text-start">
              <h4 className="h4 text-capitalize mb-3">The Daily Spin</h4>
              <p>
                Every day at 2pm is the Daily Spin. This is your chance to
                show everyone what you’re up to, or answer a random question
                that pops up. Aside from your profile video that showcases
                your personality, the Daily Spins gives members are more
                current view into your life. Think of it as a daily reminder
                to our members as to why you are so awesome! So Spin away!
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex spin_col">
              <img
                src="assets/img/watch_daily_spins1.webp"
                alt=""
                width="200"
                className="img-fluid"
              />
              <img
                src="assets/img/watch_daily_spins2.webp"
                alt=""
                width="200"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Spin;
