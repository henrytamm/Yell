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
          <Route path='/biz/:bizId/reviews/edit/:reviewId'>
            <ProtectedRoute>
              <EditReviewForm />
            </ProtectedRoute>
          </Route>
          <Route path='/biz/:bizId/hours/new'>
            <CreateHoursForm />
          </Route>
          <Route exact path="/biz/:bizId/edit">
            <EditBizForm />
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
          <Route path="/categories/:categoryId">
            <CategoryList />
            <BizByCategoryList />
          </Route>
          <Route path="/search/open">
            <OpenBizList />
          </Route>
          <Route path="/">
            <Homepage />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
