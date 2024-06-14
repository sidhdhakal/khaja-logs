import React, { createContext, useEffect, useReducer } from "react";
import { AppInitialValues, Reducer } from "../store/appReducer";
import { ActionName } from "../store/ActionConstant";
import FoodsData from "../utils/data/foods.json";
import UsersData from "../utils/data/users.json";
import OrderData from "../utils/data/orders.json";

const AppContext = createContext({
  ...AppInitialValues,
  setFoodStateHandler: () => {},
  setUserStateHandler: () => {},
  setOrderStateHandler: () => {},
  addFoodHandler: () => {},
  addOrderHandler: () => {},
  addUserHandler: () => {},
  deleteUserHandler: () => {},
  deleteFoodHandler: () => {},
  updateUserHandler: () => {},
  updateFoodHandler: () => {},
});

function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(Reducer, AppInitialValues);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setFoodStateHandler(FoodsData);
    setUserStateHandler(UsersData);
    setOrderStateHandler(OrderData);
  };

  const setFoodStateHandler = (foods) => {
    dispatch({
      type: ActionName.FETCH_FOOD,
      payload: foods,
    });
  };

  const setUserStateHandler = (users) => {
    dispatch({
      type: ActionName.FETCH_USER,
      payload: users,
    });
  };

  const setOrderStateHandler = (orders) => {
    dispatch({
      type: ActionName.FETCH_ORDER,
      payload: orders,
    });
  };

  const addFoodHandler = (food) => {
    dispatch({
      type: ActionName.ADD_FOOD,
      payload: food,
    });
  };

  const addUserHandler = (user) => {
    dispatch({
      type: ActionName.ADD_USER,
      payload: user,
    });
  };

  const addOrderHandler = (order) => {
    dispatch({
      type: ActionName.ADD_ORDER,
      payload: order,
    });
  };

  const deleteUserHandler = (userId) => {
    dispatch({
      type: ActionName.DELETE_USER,
      payload: userId,
    });
  };
  const deleteFoodHandler = (foodId) => {
    dispatch({
      type: ActionName.DELETE_FOOD,
      payload: foodId,
    });
  };
  const updateUserHandler = (payload) => {
    dispatch({
      type: ActionName.UPDATE_USER,
      payload: payload,
    });
  };
  const updateFoodHandler = (payload) => {
    dispatch({
      type: ActionName.UPDATE_FOOD,
      payload: payload,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setFoodStateHandler,
        setUserStateHandler,
        setOrderStateHandler,
        addFoodHandler,
        addOrderHandler,
        addUserHandler,
        deleteUserHandler,
        deleteFoodHandler,
        updateUserHandler,
        updateFoodHandler,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppContextProvider };
