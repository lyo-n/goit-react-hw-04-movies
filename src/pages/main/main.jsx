import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../../service/API';

export default class Main extends Component {
    state = {
        trending: [],
    };

    componentDidMount(){

    API.trendingMovies().then(results => this.setState({trending: results}));
    }

    render() {
        const {trending} = this.state;
        return(
            <article>
                <h3>Trending today</h3>
            {trending.length > 0 && (
                <ul>
                    {trending.map(movie => (
                        <li key={movie.id}>
                            <Link to={{
                                pathname: `/movie/${movie.id}`,
                                state: {from: this.props.location},
                            }}>
                                {movie.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            </article>
        );
    }
}
