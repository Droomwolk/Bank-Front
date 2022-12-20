/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import '../scss/main.scss';
import { Routes, Route } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCircleUser } from '@fortawesome/free-solid-svg-icons';

import Header from '../components/header/header';
import Home from '../pages/home/home';
import SignIn from '../pages/signIn/signIn';
import Footer from '../components/footer/footer';
import ErrorPage from '../pages/error/errorPage';
import SignUp from '../pages/signUp/signUp';
import Profil from '../pages/profil/profil';
import Transaction from '../pages/transaction/transaction';

library.add(fas, faCircleUser);

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="profil" element={<Profil />} />
        <Route path="transaction" element={<Transaction />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
