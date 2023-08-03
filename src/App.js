import { Navigate, useRoutes } from 'react-router-dom';
import Basket from './components/Basket/Basket';
import {UserContext, userContext} from "./UserContext";
import ContextFilter from './components/Context/ContextFilter';
import ContextProvider from './components/Context/ContextProvider';
import Details from './components/Details/Details';
import FavoritePage from './components/Favorite/FavoritePage';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Login from "./components/Login/Login";
import RegisterPage from "./components/Register/Register";
import ForgotYourPassword from "./components/ForgotPassword/ForgotYourPassword";
import {useState} from "react";
import PostRegister from "./components/PostRegister/PostRegister";


function App() {
  let router = useRoutes([
    { path: '/', element: <Login /> },
    { path: '/home', element: <Products /> },
    { path: '/register', element: <RegisterPage /> },
    { path: '/:id', element: <Details /> },
    { path: '/favorite', element: <FavoritePage /> },
    { path: '/forgot-password', element: <ForgotYourPassword /> },
    { path: '/basket', element: <Basket /> },
    { path: '/post-register', element: <PostRegister /> },
    { path: '*', element: <Navigate to={'/'} /> },
  ])

  const [username, setUsername] = useState();

  return (
<UserContext.Provider value={{username, setUsername}}>
    <ContextProvider>
      <ContextFilter>
        <Header />
        {router}
      </ContextFilter>
    </ContextProvider>
  </UserContext.Provider>
  );
}

export default App;
