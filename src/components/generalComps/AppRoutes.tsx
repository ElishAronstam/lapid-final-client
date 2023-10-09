import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppTodo from "../todoComps/AppTodo";
import TodoInput from "../todoComps/TodoInput";
import TodoTableContainer from "../tableComps/TodoTableContainer";

export default function AppRoutes() {
   return(
       <BrowserRouter>
           <div className='App'>
               <Routes>
                   <Route index element={<AppTodo/>}/>
                   <Route path="/todoInput" element={<TodoInput />} />
                   <Route path="/todoTableContainer" element={<TodoTableContainer />} />
               </Routes>
           </div>
       </BrowserRouter>
       )
}