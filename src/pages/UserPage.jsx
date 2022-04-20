import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchUser } from "../store/usersSlice";

const UserPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { currentUser, error } = useSelector((state) => state.usersSlice);

  React.useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return (
    <div className="container">
      <Link className="title" to="/">
        <h1 className="title__userpage">
          <svg viewBox="0 0 20 20">
            <path d="M6.634,13.591H2.146c-0.247,0-0.449,0.201-0.449,0.448v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449v-2.692C7.083,13.792,6.881,13.591,6.634,13.591 M6.185,16.283h-3.59v-1.795h3.59V16.283zM6.634,8.205H2.146c-0.247,0-0.449,0.202-0.449,0.449v2.692c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V8.653C7.083,8.407,6.881,8.205,6.634,8.205 M6.185,10.897h-3.59V9.103h3.59V10.897z M6.634,2.819H2.146c-0.247,0-0.449,0.202-0.449,0.449V5.96c0,0.247,0.202,0.449,0.449,0.449h4.488c0.247,0,0.449-0.202,0.449-0.449V3.268C7.083,3.021,6.881,2.819,6.634,2.819 M6.185,5.512h-3.59V3.717h3.59V5.512z M15.933,5.683c-0.175-0.168-0.361-0.33-0.555-0.479l1.677-1.613c0.297-0.281,0.088-0.772-0.31-0.772H9.336c-0.249,0-0.448,0.202-0.448,0.449v7.107c0,0.395,0.471,0.598,0.758,0.326l1.797-1.728c0.054,0.045,0.107,0.094,0.161,0.146c0.802,0.767,1.243,1.786,1.243,2.867c0,1.071-0.435,2.078-1.227,2.837c-0.7,0.671-1.354,1.086-2.345,1.169c-0.482,0.041-0.577,0.733-0.092,0.875c0.687,0.209,1.12,0.314,1.839,0.314c0.932,0,1.838-0.173,2.673-0.505c0.835-0.33,1.603-0.819,2.262-1.449c1.322-1.266,2.346-2.953,2.346-4.751C18.303,8.665,17.272,6.964,15.933,5.683 M15.336,14.578c-1.124,1.077-2.619,1.681-4.217,1.705c0.408-0.221,0.788-0.491,1.122-0.812c0.97-0.929,1.504-2.168,1.504-3.485c0-1.328-0.539-2.578-1.521-3.516c-0.178-0.17-0.357-0.321-0.548-0.456c-0.125-0.089-0.379-0.146-0.569,0.041L9.769,9.327v-5.61h5.861l-1.264,1.216c-0.099,0.094-0.148,0.229-0.137,0.366c0.014,0.134,0.088,0.258,0.202,0.332c0.313,0.204,0.61,0.44,0.882,0.7c1.158,1.111,2.092,2.581,2.092,4.145C17.405,12.026,16.48,13.482,15.336,14.578"></path>
          </svg>
          Back to the search
        </h1>
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
                Name: <b>{currentUser.name}</b>
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
                Created:
                <b>
                  {currentUser.created_at.match(/(\d{4})-(\d{2})-(\d{2})/)[0]}
                </b>
              </div>
              <div className="user__card-email">
                Updated:
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
              </svg>
              {currentUser.html_url}
            </a>
          </div>
        </div>
      )}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default UserPage;
