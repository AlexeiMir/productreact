import { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';


export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to='/'>Main</Link>
      <Link to='/about'>About</Link>
      <button onClick={toggleTheme}>Toggle</button>
      <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path={'/'} element={<MainPage />} />
        <Route path={'/about'} element={<AboutPage />} />

        </Routes>
      </Suspense>
    </div>
  )
}
