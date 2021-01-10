import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';
// import styles from './Navigation.module.css';

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


// render() {
//     const { id } = this.props;
//     return (
//       <div>
//         <p>Additional information</p>
//         <NavLink
//           exact
//           to={{
//             pathname: `/movie/${id}/cast`,
//             state: { from: this.props.newLocation },
//           }}
//           className={styles.NavigationLink + ' ' + styles.AddInfoLink}
//           activeClassName={styles.NavigationLinkActive}
//         >
//           Cast
//         </NavLink>
//         <br />
//         <NavLink
//           to={{
//             pathname: `/movie/${id}/reviews`,
//             state: { from: this.props.newLocation },
//           }}
//           className={styles.NavigationLink + ' ' + styles.AddInfoLink}
//           activeClassName={styles.NavigationLinkActive}
//         >
//           Reviews
//         </NavLink>
//       </div>
//     );
//   }
// }

MoreMovieInfo.propTypes = {
    id: propTypes.number.isRequired,
};




