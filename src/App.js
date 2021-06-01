import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import UserList from './components/UserList/UserList';
import Header from './components/Header/Header';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
      <div className={`${theme} app-container`}>
        <Header />
        <UserList/>
      </div>
  );
}
export default App;
