import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

export default class MoreMovieInfo extends Component {
    render() {
        const {id} = this.props;
        return (
            <div>
                <p>Additional information</p>
                <NavLink
                    exact
                    to={{
                    pathname: `/movie/${id}/cast`,
                    state: { from: this.props.newLocation },
                    }}>
                    Cast
                </NavLink>
                <br />
                <NavLink
                    to={{
                    pathname: `/movie/${id}/reviews`,
                    state: { from: this.props.newLocation },
                    }}>
                    Reviews
                </NavLink>
            </div>
        );
    }
} 

MoreMovieInfo.propTypes = {
    id: propTypes.number.isRequired,
};




