import React, { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from '../routes';
import Navigation from './navigation/navigation';

const AsyncHomePage = lazy(() =>
  import('../pages/main/main' /* webpackChunkName: "HomePage" */),
);
const AsyncMoviesPage = lazy(() =>
  import('../pages/movie/movie' /* webpackChunkName: "MoviesPage" */),
);
const AsyncMovieDetailsPage = lazy(() =>
  import(
    '../pages/movieDetails/movieDetails' /* webpackChunkName: "MovieDetailsPage" */
  ),
);
const AsyncNotFoundPage = lazy(() =>
  import('../pages/notFound/notFound' /* webpackChunkName: "NotFoundPage" */),
);

function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={AsyncHomePage} />
          <Route path={routes.moviesPage} component={AsyncMoviesPage} />
          <Route
            path={routes.movieDetailsPage}
            component={AsyncMovieDetailsPage}
          />
          <Route component={AsyncNotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;