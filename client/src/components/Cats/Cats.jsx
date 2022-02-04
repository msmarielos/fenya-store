import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cats() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch({ type: "FETCH_GET_CATEGORY_CATS" });
  }, [dispatch]);

  return (
    <>
      <h1>Cats</h1>
      <ul>
        {categories.length > 0 &&
          categories.map((item) => (
            <li key={item.id}>
              <Link to={`${window.location.pathname}/${item.url}`}>
                {item.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
