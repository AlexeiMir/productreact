import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames';


export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle</button>
      <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path={'/'} element={<MainPageAsync />} />
        <Route path={'/about'} element={<AboutPageAsync />} />

        </Routes>
      </Suspense>
    </div>
  )
}
