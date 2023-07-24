import React from 'react';
import { heroPattern, heroPatternRht } from 'Assets';
import './hero.scss';

function HeroComponent() {
  return (
    <section className="position-relative hero_banner">

      <div className="pattern_shape"><img src={heroPattern} alt="Spinnr" width="300" height="300" /></div>
      <div className="pattern_shaperht"><img src={heroPatternRht} alt="Spinnr" width="300" height="300" /></div>

      <div className="container">
        <div className="row align-items-xl-start align-items-end">
          <div className="col-lg-6">
            <div className="banner_content">
              <span className="text-primary">
                The world's first video friendship app!
              </span>
              <h1 className="h1">
                Find
                {' '}
                <strong className="text-primary">new friends</strong>
                {' '}
                who
                share your
                {' '}
                <strong className="text-primary">hobbies & interests!</strong>
              </h1>
              <p>
                With video profiles, intro videos, and video messaging, it’s
                easier than ever to be your authentic self and connect with
                people around you to do fun things together!
              </p>
              <ul className="d-flex justify-content-between list-unstyled counter">
                <li>
                  <h6 className="h2 mb-0">158</h6>
                  <span>Hobbies and counting!</span>
                </li>
                <li>
                  <h6 className="h2 mb-0">50+</h6>
                  <span>Squads and new ones added every day!</span>
                </li>
                <li>
                  <h6 className="h2 mb-0">$1,000</h6>
                  <span>Prizes given away each month!</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="position-relative hero_videos">
              <div className="row align-items-end">
                <div className="col-md-6 video_col_lft">
                  <div className="video_col video_col_one">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://www.w3schools.com/tags/movie.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="video_col video_col_two">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://www.w3schools.com/tags/movie.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="video_col video_col_third">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://www.w3schools.com/tags/movie.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="video_col video_col_fourth">
                    <video autoPlay loop muted playsInline>
                      <source
                        src="https://www.w3schools.com/tags/movie.mp4"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default HeroComponent;
