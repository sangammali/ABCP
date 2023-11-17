import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate, Outlet, Link } from 'react-router-dom';
import { userModulesData } from 'helpers/dummyBackend';
import Login from 'pages/Login';
import NotAuthorized from 'pages/NotAuthorized';
import routeConfig from 'helpers/routeConfig';
// import LayoutContainer from "containers/layout/LayoutContainer";
import { ProtectedRoute } from 'helpers/routes';
import NotFound from 'pages/NotFound';

function AppNavigation() {
  // const dispatch = useDispatch();
  // const toastData = useSelector((state) => state.common.toast);

  // State to store user role and module permissions
  const [userModules, setUserModules] = useState([]); // Make API call to fetch user modules
  // const auth = useSelector((state) => state.profile);
  const auth = {
    isAuthenticated: true,
  };

  useEffect(() => {
    // Replace this with your actual API call to fetch user modules
    const fetchUserModules = async () => {
      try {
        // const userModulesData = await fetchUserModulesFromBackend(); // Implement this function
        setUserModules(userModulesData);
      } catch (error) {
        console.error('Error fetching user modules:', error);
      }
    };

    fetchUserModules();
  }, []); // Wait until the user modules are fetched from the backend

  if (userModules.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            auth?.isAuthenticated ? (
              <Navigate to="/dashboard" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />

        {/* <Route path="" element={<LayoutContainer />}> */}

        {routeConfig.map((route, index) => {
          const hasAccess = userModulesData.some(
            (module) => module.name === route.name
          );
          if (hasAccess) {
            if (route?.subPath) {
              return route.subPath.map((itm) => {
                return (
                  <>
                    <Route
                      path={`${route.path}/${itm.path}`}
                      element={
                        <ProtectedRoute
                          authToken={auth?.isAuthenticated}
                          element={itm.component}
                        />
                      }
                    />
                    <Route
                      key={route.path}
                      path={route.path}
                      element={
                        <ProtectedRoute
                          authToken={auth?.isAuthenticated}
                          element={route.component}
                        />
                      }
                    />
                  </>
                );
              });
            }
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <ProtectedRoute
                    authToken={auth?.isAuthenticated}
                    key={route.path}
                    path={route.path}
                    element={route.component}
                  />
                }
              />
            );
          }
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<NotAuthorized />}
            />
          );
        })}

        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
        {/* Fallback Route */}
      </Routes>
    </>
  );
}

export default AppNavigation;
