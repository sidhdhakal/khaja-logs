import { ActionName } from "./ActionConstant";

export const AppInitialValues = {
  foods: [],
  users: [],
  orders: [],
};

export function Reducer(state, action) {
  switch (action.type) {
    case ActionName.FETCH_FOOD:
      return {
        ...state,
        foods: action.payload,
      };
    case ActionName.FETCH_USER:
      return {
        ...state,
        users: action.payload,
      };
    case ActionName.FETCH_ORDER:
      return {
        ...state,
        orders: action.payload,
      };
    case ActionName.ADD_FOOD:
      return {
        ...state,
        foods: [...state.foods, action.payload],
      };
    case ActionName.ADD_ORDER:
      return {
        ...state,
        orders: [...state.orders, ...action.payload],
      };
    case ActionName.ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case ActionName.DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload),
      };
    case ActionName.DELETE_FOOD:
      return {
        ...state,
        foods: state.foods.filter((food) => food.id !== action.payload),
      };
    case ActionName.UPDATE_USER:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.payload.id) {
            return {
              ...user,
              ...action.payload,
            };
          }
          return user;
        }),
      };
    case ActionName.UPDATE_FOOD:
      return {
        ...state,
        foods: state.foods.map((food) => {
          if (food.id === action.payload.id) {
            return {
              ...food,
              ...action.payload,
            };
          }
          return food;
        }),
      };
      return state;
  }
}
