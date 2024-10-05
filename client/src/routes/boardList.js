import React, { useEffect, useState } from "react";
import axios from "axios";
import "./boardList.scss";
import { useLocation } from "react-router-dom";
import Rating from '@mui/material/Rating';


const BoardList = () => {
  const [movies, setMovies] = useState([]);
  const [review, setReview] = useState("");
  const [reviews, setReviews] = useState([]);
  const [movieInfo, setMovieInfo] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedReview, setEditedReview] = useState("");
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user_star_rate, setUserStarRate] = useState(0); // State to store user's star rating

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const movieNumber = searchParams.get("movie_number");

  useEffect(() => {
    if (localStorage.getItem("LoginID") != null) {
      setCurrentUser(localStorage.getItem("LoginID"));
      setIsLoggedIn(true);
    }
    console.log("Movie ID:",movieNumber);
    const params_movie = {movie_id : movieNumber};

    const fetchData = async () => {
      try {
        const response = await axios.get(`/movie`,{params : params_movie});
        const response_rv = await axios.get("/review");
        setMovies(response.data);
        setReviews(response_rv.data);
      } catch (error) {
        console.error("에러 fetching data:", error);
      }
    };

    fetchData();
  }, [movieNumber]);

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (review.trim() !== "") {
      setReviews([
        ...reviews,
        {
          id: reviews.length + 1,
          author: "사용자",
          content: review,
          date: new Date(),
          liked: false,
        },
      ]);
      setReview("");
    }
  };

  const handleEdit = (id, content) => {
    setEditingId(id);
    setEditedReview(content);
  };

  const handleSaveEdit = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, content: editedReview } : review
      )
    );
    setEditingId(null);
    setEditedReview("");
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditedReview("");
  };

  const handleDelete = (id) => {
    setReviews(reviews.filter((review) => review.id !== id));
  };

  const handleLike = (id) => {
    setReviews(
      reviews.map((review) =>
        review.id === id ? { ...review, liked: !review.liked } : review
      )
    );
  };

  const handleStarRatingChange = (event, newValue) => {
    setUserStarRate(newValue); // Update user's star rating
  };

  return (
    <div className="the_whole_box">
      <div className="movie_info">
        {Array.isArray(movies) && movies.map((movie) => (
          <div >
            <div className="movie_image_box">
              <img
                className="movie_image"
                src={movie.img_url}
                alt={movie.movie_name}
              />
            </div>
            <div className="movie_explanation">
              <ul className="movie_info_category">{movie.tile}</ul>
              <ul className="movie_info_category">별점 : {movie.averagerating}</ul>
              <Rating name="movie_rating" value={movie.averagerating} readOnly/>

              <ul className="movie_info_category">감독 : {movie.director}</ul>
              <ul className="movie_info_category">출연진 : {movie.actors}</ul>
              <ul className="movie_info_category">줄거리 : {movie.description}</ul>
            </div>
          </div>
        ))}
      </div>
      <div className="review_list">
        <div className="review_box">
          <br/>
          <h3 className="review_start">리뷰 작성</h3>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="리뷰를 입력하세요"
              value={review}
              onChange={handleReviewChange}
              className="review_input_form"
            />
            <Rating
              name="user_star_rating"
              value={user_star_rate}
              onChange={handleStarRatingChange} // Call this function when user clicks the Rating component
              size="large"
            />
            <button type="submit" className="review_sumbit_button" >
              등록
            </button>
          </form>
          <div className="reviews_box">
            <h3 className="review_start">리뷰 목록</h3>

            {reviews.map((user) => (
              <li className="reviews_lists" key={user.user_id}>
                <span>{user.user_id}</span>
                <br />

                <span className="review_text">{user.content}</span>

                
                <br />
                <button
                  className="liked_button"
                  onClick={() => handleLike(user.id)}
                >
                  {user.likes ? "♥" : "♡"}
                </button>
                <span className="review_date">게시일: {user.post_date}</span>
                <Rating name="review_star" value={user.rating} readOnly />
                {editingId === user.id ? (
                  <>
                    <button onClick={() => handleSaveEdit(user.user_id)}>
                      저장
                    </button>
                    <button onClick={handleCancelEdit}>취소</button>
                  </>
                ) : (
                  <button
                    className="edit_button"
                    onClick={() => handleEdit(user.user_id, user.content)}
                  >
                    수정
                  </button>
                )}
                <button
                  className="delete_button"
                  onClick={() => handleDelete(user.user_id)}
                >
                  삭제
                </button>
              </li>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
