import React, { Component, Suspense } from 'react';
import { Route, Switch, Link, useLocation } from 'react-router-dom'; //, useHistory
import { useTranslation, withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import './App.css';
import { RoutePages } from './Routes/Index';

// use hoc for class based components
class LegacyWelcomeClass extends Component {
  render() {
    const { t } = this.props;
    return <h2>{t('title')}</h2>;
  }
}
LegacyWelcomeClass.propTypes = {
  t: PropTypes.func,
};

const Welcome = withTranslation()(LegacyWelcomeClass);

// page uses the hook
function Page() {
  const { t, i18n } = useTranslation();

  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  Page.propTypes = {
    t: PropTypes.func,
  };

  console.log('props', location);

  const pathName = location.pathname;
  return (
    <div className="App">
      {pathName === '/' ||
      pathName === '/program' ||
      pathName === '/program/listv1' ||
      pathName === '/auth' ? (
        <div className="App-header">
          <Welcome />
          <button onClick={() => changeLanguage('de')}>de</button>
          <button onClick={() => changeLanguage('en')}>en</button>
          <Switch>
            <Route
              path="/"
              render={() => {
                return <RoutePages />;
              }}
            />
          </Switch>
          <Link to="/program">Student</Link>
          <Link to="/auth">Auth</Link>
          <div>{t('description.part1')}</div>
        </div>
      ) : (
        <Switch>
          <Route
            path="/"
            render={() => {
              return <RoutePages />;
            }}
          />
        </Switch>
      )}
    </div>
  );
}

// here app catches the suspense from page in case translations are not yet loaded
function App() {
  return (
    <Suspense fallback={''}>
      <Page />
    </Suspense>
  );
}

export default App;
