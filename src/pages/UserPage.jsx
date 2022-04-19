import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUser } from "../store/usersSlice";

const UserPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const {currentUser, error} = useSelector((state) => state.usersSlice);

  React.useEffect(() => {
    dispatch(fetchUser(id));
  }, []);


  return (
    <div className="container">
      <Link className="title" to="/">
        <h1>Back to the search</h1>
      </Link>
      {currentUser && (
        <div className="user__card">
          <div className="user__card-header">
            <img
              className="user__card-img img"
              src={`${currentUser.avatar_url}`}
              alt={`${currentUser.login}`}
            />
            <div className="user__card-description">
              <div className="user__card-name">
                Name: <b>{currentUser.name}</b>{" "}
              </div>
              <div className="user__card-company">
                Company: <b>{currentUser.company}</b>
              </div>
              <div className="user__card-location">
                Location: <b>{currentUser.location}</b>
              </div>
              <div className="user__card-email">
                Email: <b>{currentUser.email}</b>
              </div>
              <div className="user__card-email">
                Blog: <b>{currentUser.blog}</b>
              </div>
              <div className="user__card-email">
                Created:{" "}
                <b>
                  {currentUser.created_at.match(/(\d{4})-(\d{2})-(\d{2})/)[0]}
                </b>
              </div>
              <div className="user__card-email">
                Updated:{" "}
                <b>
                  {currentUser.updated_at.match(/(\d{4})-(\d{2})-(\d{2})/)[0]}
                </b>
              </div>
            </div>
          </div>
          <div className="user__card-info">
            <div className="user__card-infoItem">
              <div>{currentUser.public_repos}</div>
              <span>Repositories</span>
            </div>
            <div className="user__card-infoItem">
              <div>{currentUser.followers}</div>
              <span>Followers</span>
            </div>
            <div className="user__card-infoItem">
              <div>{currentUser.following}</div>
              <span>Following</span>
            </div>
          </div>
          <div className="user__card-link">
            <a href={currentUser.html_url} rel="noreferrer" target="_blank">
              <svg viewBox="0 0 20 20">
                <path d="M14.68,12.621c-0.9,0-1.702,0.43-2.216,1.09l-4.549-2.637c0.284-0.691,0.284-1.457,0-2.146l4.549-2.638c0.514,0.661,1.315,1.09,2.216,1.09c1.549,0,2.809-1.26,2.809-2.808c0-1.548-1.26-2.809-2.809-2.809c-1.548,0-2.808,1.26-2.808,2.809c0,0.38,0.076,0.741,0.214,1.073l-4.55,2.638c-0.515-0.661-1.316-1.09-2.217-1.09c-1.548,0-2.808,1.26-2.808,2.809s1.26,2.808,2.808,2.808c0.9,0,1.702-0.43,2.217-1.09l4.55,2.637c-0.138,0.332-0.214,0.693-0.214,1.074c0,1.549,1.26,2.809,2.808,2.809c1.549,0,2.809-1.26,2.809-2.809S16.229,12.621,14.68,12.621M14.68,2.512c1.136,0,2.06,0.923,2.06,2.06S15.815,6.63,14.68,6.63s-2.059-0.923-2.059-2.059S13.544,2.512,14.68,2.512M5.319,12.061c-1.136,0-2.06-0.924-2.06-2.06s0.923-2.059,2.06-2.059c1.135,0,2.06,0.923,2.06,2.059S6.454,12.061,5.319,12.061M14.68,17.488c-1.136,0-2.059-0.922-2.059-2.059s0.923-2.061,2.059-2.061s2.06,0.924,2.06,2.061S15.815,17.488,14.68,17.488"></path>
              </svg>{" "}
              {currentUser.html_url}
            </a>
          </div>
        </div>
      )}
      {error&& <div className="error">{error}</div>}
    </div>
  );
};

export default UserPage;
