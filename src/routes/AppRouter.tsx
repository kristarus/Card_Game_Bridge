import { Switch, Route, Redirect } from "react-router-dom";
import { pageRoutes } from "constants/pageRoutes";
import { Page404, MainPage, LoginPage } from "pages";
import { useStore } from "store/authStore";

function AppRouter() {
  const auth = useStore((state) => state.auth);

  const addRedirect = () => {
    if (!auth)
      return <Redirect exact from={pageRoutes.MAIN} to={pageRoutes.LOGIN} />;
    else return <Redirect exact from={pageRoutes.LOGIN} to={pageRoutes.MAIN} />;
  };

  return (
    <Switch>
      {addRedirect()}
      <Route exact path={pageRoutes.LOGIN}>
        <LoginPage />
      </Route>
      <Route exact path={pageRoutes.MAIN}>
        <MainPage />
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
