import { FETCH_PROJECTS, UPDATE_PROJECT } from "../actions/types";

const initialState = [
  {
    _id: "",
    title: "",
    description: "",
    issueid: "",
    projectManager: "",
    developer: "",
    brand: "",
    benefitsByMarket: [
      {
        name: "",
        hours: 0
      }
    ]
  }
];

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_PROJECTS:
      return action.payload;
    case UPDATE_PROJECT:
      return state;
    default:
      return state;
  }
}
