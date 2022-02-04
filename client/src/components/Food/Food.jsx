import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function Food() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const type = pathname.split("/")[1];

  const { items } = useSelector((state) => state.items);

  useEffect(() => {
    dispatch({
      type: "FETCH_GET_ITEMS",
      payload: {
        type: pathname.split("/")[1],
        category: pathname.split("/")[2],
      },
    });
  }, [dispatch]);

  return (
    <>
      {type === "cats" ? (
        <>
          <h1>Корм для кошек</h1>
          <ul>
            {items.map((item) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
        </>
      ) : (
        <h1>Корм для собак</h1>
      )}
    </>
  );
}
