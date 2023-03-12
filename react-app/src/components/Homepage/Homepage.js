import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { getBizes } from "../../store/biz";
import { useDispatch } from "react-redux";
import { getAllCategory } from "../../store/categories";
import "./Homepage.css";
import Footer from "../Footer/Footer";

function Homepage(bizes) {
  const dispatch = useDispatch();
  const biz = useSelector((state) => state.bizReducer);
  const bizArr = biz ? Object.values(biz) : null;

  const categories = useSelector((state) => state.categoryReducer);
  const categoriesArr = categories ? Object.values(categories) : null;

  useEffect(() => {
    dispatch(getAllCategory());
    dispatch(getBizes());
  }, [dispatch]);

  return (
    <>
      <div className="homepage-img-container">
        <img
          className="homepage-img"
          src="https://images.creativemarket.com/0.1.0/ps/3563313/2963/1214/m1/fpnw/wm0/qxp6ggnxhhij6ncr8ddxrt8mbizu00mzp6p9kbpkpbkfrozsnfkrlsh5yag7gydv-.jpg?1510492456&s=013b23b66f7a9e3bed6539a470368bea"
        ></img>
      </div>
      <div className="biz-list-container">
        <h1 className="biz-title">Check out these businesses!</h1>
        <div className="biz-card-container">
          {bizArr &&
            bizArr.slice(0, 8).map((biz) => (
              <div className="biz-img-container">
                <div className="biz-img-link">
                  <NavLink to={`/biz/${biz?.id}`}>
                    <img className="biz-img" src={biz.previewImage}></img>
                  </NavLink>
                </div>
                <div className="biz-name-link">
                <NavLink to={`/biz/${biz?.id}`}>
                <h3 className="biz-name">{biz?.name}</h3>
                </NavLink>
                </div>
              </div>
            ))}
        </div>
        <h1 className="categories-title-container">Categories</h1>
        <div className="categories-container">
          <NavLink to={`/categories/${categoriesArr[0]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">🥗</p>
              <p className="category-name-container">
                {categoriesArr[0]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[1]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container"> 🌮</p>
              <p className="category-name-container">
                {categoriesArr[1]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[2]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">🍣</p>
              <p className="category-name-container">
                {categoriesArr[2]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[3]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">🥣</p>
              <p className="category-name-container">
                {categoriesArr[3]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[4]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">🍕</p>
              <p className="category-name-container">
                {categoriesArr[4]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[5]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">🥖</p>
              <p className="category-name-container">
                {categoriesArr[5]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[6]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">☕</p>
              <p className="category-name-container">
                {categoriesArr[6]?.name}
              </p>
            </div>
          </NavLink>
          <NavLink to={`/categories/${categoriesArr[7]?.id}`}>
            <div className="category-card-container">
              <p className="emojis-container">🍦</p>
              <p className="category-name-container">
                {categoriesArr[7]?.name}
              </p>
            </div>
          </NavLink>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
