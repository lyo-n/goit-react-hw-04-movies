import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import API from '../../service/API';
import queryParams from '../../service/queryParams';
import Searching from '../../components/search/searching';

export default class MainPage extends Component {
    state = {
        searchQuery: '',
        findeMovies: [],
    };

    componentDidMount(){
        const {query} = queryParams(this.props.location.search);
        if (query) {
            this.fetchMovies(query);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const {query: prevQuery} = queryParams(prevState.location.search);
        const {query: nextQuery} = queryParams(this.props.location.search);
        if (prevQuery !== nextQuery) {
            this.fetchMovies(nextQuery);
        }
    }

    fetchMovies = query =>{
        API.searchMovies(query).then(results => this.setState({findeMovies: results}));
    };

    changeQuery = query =>{
        this.props.history.push({
            ...this.props.location,
            search: `query=${query}`,
        });
    }

    render() {
        const { findeMovies } = this.state;
        return(
            <article>
                <Searching onSubmit={this.changeQuery} />
                {findeMovies.length > 0 &&(
                    <ul>
                        {findeMovies.map(movie =>(
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