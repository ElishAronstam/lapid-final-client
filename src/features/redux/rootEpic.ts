import toggleHighPriorityFilterEpic from "./toggleHighPriorityFilterEpic";
import {combineEpics} from "redux-observable";
import toggleOpenStatusFilterEpic from "./toggleOpenStatusFilterEpic";


const rootEpic = combineEpics(
    toggleHighPriorityFilterEpic,
    toggleOpenStatusFilterEpic,
);

export default rootEpic;