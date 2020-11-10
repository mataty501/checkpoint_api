import './App.css';
import UserList from './components/UserList'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
/*
1- Create a project using create-react-app.
2- Create UserList.js file in src folder

3- Import axios library
4- You gonna use jsonplaceholder API to get list of user
5- Use Axios to Get data from “https://jsonplaceholder.typicode.com/users” inside useEffect hooks
6- Use UseState hooks to save data into listOfUSer state
7- Map listOfUser to display list of user into screen
8- Style your App as you wish
*/

function App() {
  return (
    <div className="App">
      <UserList/>
    </div>
  );
}

export default App;
