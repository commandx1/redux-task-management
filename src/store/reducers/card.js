import {
  ADD_CARD,
  UPDATE_CARD,
  DELETE_CARD,
  ADD_TODO,
  TOGGLE_TODO,
  GET_CARDS_BY_CATEGORY,
  DELETE_TODO,
  UPDATE_TODO,
} from "../types";

const initialState = [
  // {
  //   id: 1,
  //   title: "Yazılım",
  //   category: "eğitim",
  //   categoryFiltered: false,
  //   tasks: [
  //     {
  //       id: 11,
  //       description: "Redux çalışılacak",
  //       isCompleted: true,
  //     },
  //     {
  //       id: 12,
  //       description: "Ona çalışılacak",
  //       isCompleted: false,
  //     },
  //   ],
  // },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      const titleOfNewCard = action.payload.title;
      const categoryOfNewCard = action.payload.category.toLocaleLowerCase(
        "tr-TR"
      );
      const isFiltered = state.filter(
        (card) => card.categoryFiltered && card.category === categoryOfNewCard
      );
      return [
        ...state,
        {
          title: titleOfNewCard,
          category: categoryOfNewCard,
          id: Math.random(),
          tasks: [],
          categoryFiltered: isFiltered.length > 0,
        },
      ];

    case UPDATE_CARD:
      return state.map((card) =>
        card.id === action.payload.id
          ? { ...card, title: action.payload.title }
          : card
      );
    case DELETE_CARD:
      return state.filter((card) => card.id !== action.payload);
    case ADD_TODO:
      return state.map((card) => {
        if (card.id === action.payload.card.id) {
          const newTodos = [
            ...card.tasks,
            {
              id: Math.random(),
              description: action.payload.task,
              isCompleted: false,
            },
          ];
          return { ...card, tasks: newTodos };
        } else return card;
      });
    case TOGGLE_TODO:
      return state.map((card) => {
        if (card.id === action.payload.card.id) {
          const updatedTodos = card.tasks.map((task) =>
            task.id === action.payload.task.id
              ? { ...task, isCompleted: !task.isCompleted }
              : task
          );
          return { ...card, tasks: updatedTodos };
        } else return card;
      });
    case UPDATE_TODO:
      return state.map((card) => {
        const updatedTodos = card.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        );
        return { ...card, tasks: updatedTodos };
      });
    case DELETE_TODO:
      return state.map((card) => {
        const updatedTodos = card.tasks.filter(
          (task) => task.id !== action.payload
        );
        return { ...card, tasks: updatedTodos };
      });
    case GET_CARDS_BY_CATEGORY:
      return state.map((card) =>
        card.category === action.payload
          ? { ...card, categoryFiltered: !card.categoryFiltered }
          : card
      );
    default:
      return state;
  }
};

export default reducer;
