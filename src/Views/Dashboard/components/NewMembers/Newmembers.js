import { Member1, Member2 } from 'Assets';
import { Button } from 'Components/atoms';
import React from 'react';

function NewMembers() {
  return (
    <section className="py-5 bg-white member_sec">
      <div className="container container-xl">
        <div className="text-center title_h2">
          <h2 className="h2 mb-2 text-capitalize">Newest Members</h2>
          <span>
            We have new people joining every day from around the world. These
            are the latest people to join Spinnr!
          </span>
        </div>
        <div className="row">
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member1}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <span className="btn-status btn-online">Online</span>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member2}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member1}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <span className="btn-status btn-online">2 days ago</span>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member1}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member1}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <span className="btn-status btn-online">Online</span>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member2}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member1}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <span className="btn-status btn-online">2 days ago</span>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <div className="position-relative member_block w-100">
              <div className="position-relative member_header">
                <figure className="m-0">
                  <img
                    src={Member1}
                    alt="Member"
                    width="200"
                    className="w-100"
                  />
                </figure>
                <div className="d-flex justify-content-start flex-wrap tags_block">
                  <span className="tags active">fashion</span>
                  <span className="tags active">music</span>
                  <span className="tags active">hiking</span>
                </div>
              </div>
              <div className="card_summary">
                <h5 className="mb-1 h5 text-capitalize">Arika Q Smith</h5>
                <p>22, Philadelphia, PA. USA</p>
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
export default NewMembers;
