import { AdblockIcon, EncryptedIcon } from 'Assets';
import React from 'react';

function AddOn() {
  return (
    <section className="py-5 bg-white addon_sec">
      <div className="container container-xl">
        <div className="row">
          <div className="col-lg-6 my-2">
            <div className="position-relative bg-white d-flex align-items-center adon_block">
              <div className="icon_box">
                <img src={EncryptedIcon} alt="Spinnr" width="90" />
              </div>
              <div className="adon_summary">
                <h5 className="h5">Your Data is Safe</h5>
                <p>
                  We are committed to your data integrity. We don’t store
                  sensitive data, and will never sell or exploit your
                  information.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 my-2">
            <div className="position-relative bg-white d-flex align-items-center adon_block">
              <div className="icon_box">
                <img src={AdblockIcon} alt="Spinnr" width="90" />
              </div>
              <div className="adon_summary">
                <h5 className="h5">No Ads Ever</h5>
                <p>
                  We know ads suck. That’s why you’ll never find any on our
                  app. Instead, we offer a section for Shops to show off their
                  stuff!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddOn;
