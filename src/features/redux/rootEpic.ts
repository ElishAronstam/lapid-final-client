import {combineEpics} from "redux-observable";
import toggleFiltersEpic from "./toggleFiltersEpic";

const rootEpic = combineEpics(
   toggleFiltersEpic
);

export default rootEpic;