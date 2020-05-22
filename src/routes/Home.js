import React from 'react';
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";
//3.2 component life cycle 행의 질문 다시 살펴볼 것
class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    }//state 를 쓰기 위해서 굳이 class compenent를 쓸 필요는 없다 다만 새로운 거 react hook 가 나와서 그렇다. 그러나 그렇다고 class component가 과거라는 것이 아니다.
    getMovies = async () => { //아래의 비동기식 처리말고 더 좋은 방법. ES6 기준. async
        // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json"); axios가 항상 빠르지 않음. 약간 기다려야 함.//ES6 기준 async없으면 await 못씀.
        const {
            data: {
                data: {
                    movies
                }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"); //axios가 항상 빠르지 않음. 약간 기다려야 함.//ES6 기준 async없으면 await 못씀.
        // this.setState({movies:movies});//1:은 state, 2:는 axios
        this.setState({movies}); //javascript가 알아서 잘 판단할 수 있다.
        // console.log(movies.data.data.movies);
        console.log(movies);
    }
    // async componentDidMount() {axios} axios가 빠르지 않을 경우.
    componentDidMount() { //render 호출시 호출되는 함수)
        // setTimeout(() => {
             //위에 books가 설정되지 않았는데 이러면 오류가 없나?
            //   오류 없음 위의 state는 단순히 계획이지 여기서 추가적으로 들어오는 것에 대해서는 막지 않음. 지정 시에 undefined일 가능성이 있을 뿐. 다만 이렇게 하는 것보다 미리 state에 넣는 것이 좋다.
        // }, 6000);
        // 마운팅하는 동안 데이터를 가져와서 fetch하는 것. 데이터를 보통은 fetch를 쓰지만 여기서는 axios를 씀. 이게 더 좋다고 함.
        // npm i axios 불법적인 영화 공유사이트인데 API를 잘짜서 이쪽 API를 사용함.
        // https://yts.lt/api/v2/list_movies.json 다만 불법적이라서 주소가 자주 변경되므로 이를 proxy함.
        // https://yts-proxy.now.sh/list_movies.json endpoint 는 URL 을 의미 const { data }
        // = await axios.get() vs const response = await fetch.get() const data = await
        // response.json() 기본적으로는 이렇게 쓰인다. await 나 then 이나 둘 다 비동기적으로 한다는 뜻.
        // fetch('http://hanur.me/users').then(res => res.json()).then(data =>
        // data.filter(item => item.isRequired));
        //
        this.getMovies();
        this.setState({isLoading: false, books: true});
    }
    render() {
        // return <div>{isLoading ? "Loading":"We are ready"}</div>;//이전 기준 const
        // {isLoading} = this.state; ES6 기준
        /*A :        const { isLoading } = this.state;

      B :        const isLoading = this.state.isLoading;

    is A same B ??
    A is new~ es6 ?? oh my god
    ->search 비구조화할당
 */
        const {isLoading, movies} = this.state;
        return <section className="container">{
                isLoading
                    ? <div className="loader">
                            <span className="loader__text">Loading...</span>
                        </div>
                    : (
                        <div className="movies">
                            {
                                movies.map(movie => (
                                    <Movie
                                        key={movie.id}
                                        id={movie.id}
                                        year={movie.year}
                                        title={movie.title}
                                        summary={movie.summary}
                                        poster={movie.medium_cover_image}
                                        genres={movie.genres}
                                        />
                                ))
                            }
                        </div>
                    )
            }</section>;
        // React requires elements generated on a loop to have a 'key' prop. Remove it
        // and see what happens. Key가 필요할 뿐. return <div>{isLoading ? "Loading...":"We
        // are ready"}</div>;
        //여기서 div 뭐 이런것처럼 전부 HTML처럼 보이는데 이게 전부 JSX다. HTML이 아니다. 여기 내부는 Javascript이기 때문.
        //따라서 html의 class 같이 쓰려면 className이라고 써야한다. 비슷한 예로 label 내에 for이 있는데 이때는 htmlFor이라고 써야한다.
    }
}

export default Home;
