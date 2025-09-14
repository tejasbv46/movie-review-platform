import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { httpGetMovieInfo, httpPostMovieRating } from '../hooks/request';
import './MovieDetails.css';
import { useCookies } from 'react-cookie';

export default function MovieDetails() {
  const location = useLocation();
  const { state } = location;

  const [checkedStars, setCheckedStars] = useState(["","","","","","","","","","","0"]);
  const [cookies] = useCookies(["access_token"]);
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [genres, setGenres] = useState([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [successPopup, setSuccessPopup] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => {
    setIsPopupOpen(false);
    setCheckedStars(["","","","","","","","","","",""]);
  };
  const showSuccessPopup = () => {
    setSuccessPopup(true);
    setTimeout(() => setSuccessPopup(false), 3000);
  };

  useEffect(() => {
    setLoading(true);
    if (state) {
      httpGetMovieInfo(state.imdbID)
        .then(data => {
          setMovieInfo(data);
          setGenres(data.Genre.split(', '));
          setLoading(false);
        });
    }
  }, [state]);

  return (
    <div>
      {/* Font Awesome for stars */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" 
      />

      {loading || !state ? (
        <div className="loading-container">
          <div className="loading-icon"></div>
        </div>
      ) : (
        <div className="movie-details">
          <div className="movie-valuables">
            <h1 className="title">{movieInfo.Title}</h1>
            <div className="movie-time-info">
              <h5 className="release-date">{movieInfo.Year}</h5>
              <h5 className="rated">{movieInfo.Rated}</h5>
              <h5 className="runtime">{movieInfo.Runtime}</h5>
            </div>
            <img src={state.Poster} alt={state.Title} />
          </div>

          <div className="movie-information">
            <div className="genre">
              {genres.map((genre, index) => (
                <div key={index}>{genre}</div>
              ))}
            </div>

            <div className="plot">{movieInfo.Plot}</div>

            <div className="staff">
              <ul>
                <li>Director: {movieInfo.Director}</li>
                <li>Writers: {movieInfo.Writer}</li>
                <li>Actors: {movieInfo.Actors}</li>
              </ul>
            </div>

            <div className="rating">
              {movieInfo.Ratings?.map((rating, index) => (
                <div className="individual-rating" key={index}>
                  {rating.Source}: {rating.Value}
                </div>
              ))}
            </div>

            {cookies.access_token && (
              <div className="personal-rating">
                <button onClick={openPopup} className="rating-btn">
                  Rate this movie
                </button>
              </div>
            )}

            {isPopupOpen && (
              <div className="popup">
                <div className="popup-content">
                  <div className="popup-header">
                    <span onClick={closePopup} className="close">&times;</span>
                    <h2>Rating</h2>
                  </div>
                  <div className="popup-body">
                    <div className="star-wrapper">
                      {Array.from({ length: 10 }).map((_, idx) => (
                        <span
                          key={idx}
                          className={`fa fa-star s${idx + 1} ${checkedStars[idx]}`}
                          onClick={() => {
                            const newChecked = Array(10).fill("");
                            newChecked[idx] = "checked";
                            newChecked[10] = 10 - idx;
                            setCheckedStars(newChecked);
                          }}
                        ></span>
                      ))}
                    </div>

                    <div className="rating-number">
                      <h3 className="rating-text">{checkedStars[10]}</h3>
                    </div>

                    <button
                      className="confirm-btn"
                      onClick={() => {
                        httpPostMovieRating(
                          window.localStorage.getItem('userID'),
                          movieInfo.imdbID,
                          movieInfo.Title,
                          movieInfo.Poster,
                          checkedStars[10]
                        );
                        showSuccessPopup();
                      }}
                    >
                      Confirm
                    </button>

                    {successPopup && (
                      <div className="success-popup">
                        Movie rated successfully!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      )}
    </div>
  );
}
