import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/SignupFormPage";
import LoginFormPage from "./components/LoginFormPage";
import { authenticate } from "./store/session";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Navigation from "./components/Navigation";
import CategoryList from "./components/Categories/CategoryList/CategoryList";
import BizByCategoryList from "./components/Categories/BizByCategoryList/BizByCategoryList";
import BizPage from './components/Biz/(placeholder)BizPage'
import CreateBizForm from "./components/Biz/CreateBizForm";
import EditBizForm from "./components/Biz/EditBizForm";
import EditReviewForm from "./components/EditReviewForm/EditReviewForm";
import UserProfile from "./components/User/UserProfile";
import OpenBizList from "./components/Open/OpenBizList/OpenBizList";
import Homepage from "./components/Homepage/Homepage";
import CreateHoursForm from "./components/Hours/CreateHoursForm";
import EditHoursForm from "./components/Hours/EditHoursForm";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(authenticate()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path="/login" >
            <LoginFormPage />
          </Route>
          <Route exact path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path='/biz/:bizId/reviews/edit/:reviewId'>
            <ProtectedRoute>
              <EditReviewForm />
            </ProtectedRoute>
          </Route>
          <Route exact path='/biz/:bizId/hours/new'>
            <ProtectedRoute>
            <CreateHoursForm />
            </ProtectedRoute>
          </Route>
          <Route exact path="/biz/:bizId/edit">
            <ProtectedRoute>
            <EditBizForm />
            <EditHoursForm />
            </ProtectedRoute>
          </Route>
          <Route exact path="/biz/new">
            <ProtectedRoute>
              <CreateBizForm />
            </ProtectedRoute>
          </Route>
          <Route exact path="/biz/:bizId">
            <BizPage />
          </Route>
          <Route exact path='/users/:userId'>
            <UserProfile />
          </Route>
          <Route exact path="/categories/:categoryId">
            <BizByCategoryList />
            <CategoryList />
          </Route>
          <Route exact path="/search/open">
            <OpenBizList />
          </Route>
          <Route exact path="/">
            <Homepage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
