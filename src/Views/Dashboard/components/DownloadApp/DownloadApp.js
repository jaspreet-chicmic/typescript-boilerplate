import {
  AppstoreIcon,
  DownloadAppIcon,
  MenAppIcon,
  PlaystoreIcon,
  QRCodeIcon,
  WomenAppIcon,
  WomenChatIcon,
} from 'Assets';
import React from 'react';

function DownloadApp() {
  return (
    <section className="app_download_sec">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-xl-row">
          <div className="col-xl-6">
            <div className="d-flex align-items-end justify-content-center apps_infograph">
              <div className="position-relative aap_main mb-0">
                <figure className="mb-0">
                  <img
                    src={DownloadAppIcon}
                    alt="Spinnr"
                    width="300"
                    className="w-100"
                  />
                </figure>
                <div className="position-absolute men_lft">
                  <img
                    src={MenAppIcon}
                    alt="Spinnr"
                    width="200"
                    className="w-100"
                  />
                  <span className="chat_msg">
                    <img
                      src={WomenChatIcon}
                      alt="Spinnr"
                      width="100"
                      className="w-100"
                    />
                  </span>
                </div>
                <div className="position-absolute women_rht">
                  <img
                    src={WomenAppIcon}
                    alt="Spinnr"
                    width="200"
                    className="w-100"
                  />
                  <span className="chat_msg">
                    <img
                      src={WomenChatIcon}
                      width="100"
                      className="w-100"
                      alt="Spinnr"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="app_summary">
              <span>Access all of our amazing features!</span>
              <h2 className="h2 text-white mb-3">Download the App</h2>
              <p>
                While it’s fun to use Spinnr on the web, we highly encourage you
                to install our native iOS or Android app to get the best user
                experience. We promise you’ll love it, and by joining the app,
                you’ll have access to our monthly contests and giveaways! So
                what are you waiting for?
              </p>
              <div className="d-flex flex-nowrap store_links">
                <div className="d-flex flex-column app_store">
                  <a href="test" target="_blank">
                    <img src={PlaystoreIcon} alt="Play Store" width="180" />
                  </a>
                  <a href="test" target="_blank">
                    <img src={AppstoreIcon} alt="App Store" width="180" />
                  </a>
                </div>
                <div className="qr_code">
                  <img src={QRCodeIcon} alt="QR" width="140" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default DownloadApp;
