import { Switch, Route, Redirect } from "react-router-dom";
import { pageRoutes } from "constants/pageRoutes";
import { Page404, PresentationPage, MainPage, LoginPage } from "pages";

function AppRouter() {
  return (
    <Switch>
      <Route exact path={pageRoutes.PRESENTATION}>
        <PresentationPage />
      </Route>
      <Route exact path={pageRoutes.MAIN}>
        <MainPage />
      </Route>
      <Route exact path={pageRoutes.LOGIN}>
        <LoginPage />
      </Route>
      {/* Special case: redirect to sign in from root page */}
      <Redirect exact from="/" to={pageRoutes.NOT_FOUND} />
      {/* Special case: if no route matched - show page 404 */}
      <Route>
        <Page404 />
      </Route>
    </Switch>
  );
}

export default AppRouter;
