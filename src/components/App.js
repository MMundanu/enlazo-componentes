import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';
import { Switch, Route } from 'react-router-dom';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import NotFound from './notFound';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
       
            
          <SideBar />
          <Switch>
                <Route exact path={'/genres'} component={GenresInDb} />
                <Route exact path={'/lastMovie'} component={LastMovieInDb} />
                <Route exact path={'/movies'} component={ContentRowMovies} />
                <Route exact path={'/'} component={ContentWrapper} />
                <Route component={NotFound} />
            </Switch>
          {/*<ContentWrapper />*/}
        </div>
    </React.Fragment>
  );
}

export default App;
