import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"
import "./Movie.css";

function Movie({
    id,
    year,
    title,
    summary,
    poster,
    genres = ['nope']
}) {
    return <Link
        to={{
            // pathname: "/movie-detail",
            pathname: `/movie/${id}`,
            //state를 저장해야하므로 페이지를 보일때마다 해당 데이터를 로드해야한다.
            //따라서 이 부분은 redux를 통해서 해결해야한다. 
            state: {
                year,
                title,
                summary,
                poster,
                genres

            }
        }}>
        <div className="movie">
            <img src={poster} alt={title} title={title}/>
            <div className="movie_data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">{
                        genres.map((genre, index) =>< li key = {
                            index
                        }
                        className = "genres__genre" > {
                            genre
                        }</li>)
                    }</ul>
                <h4 className="movie__summary">{summary.slice(0, 180)}...</h4>
            </div>
        </div>
    </Link>
}
// movie component 는 따로 state가 필요하지 않으므로 function component로 변경 우리가 얻어올 prop을
// 알아보는것. <h3 class="movie__title">{title}</h3> 에 직접적으로 style을 넣고 싶으면 <h3
// class="movie__title" style={{backgroundColor:"red"}}>{title}</h3> 이런 방식으로 가능은
// 하나 추천하지 않는 방법.

Movie.propTypes = {
    id: PropTypes.number.isRequired, //프록시로 얻어온 json 데이터 내에 id 값.
    year: PropTypes.number.isRequired, //해당 데이터의 year값 이하 동일.
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes
        .arrayOf(PropTypes.string)
        .isRequired
};
export default Movie;
