import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import KingsOfLeon from './pages/KingsOfLeon'
import MyMorningJacket from './pages/MyMorningJacket'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import TheRoots from './pages/TheRoots'

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/kingsofleon">Kings Of Leon</Link>
          </li>
          <li>
            <Link to="/mymorningjacket">My Morning Jacket</Link>
          </li>
          <li>
            <Link to="/theroots">The Roots</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/kingsofleon" component={KingsOfLeon}></Route>
        <Route
          exact
          path="/mymorningjacket"
          component={MyMorningJacket}
        ></Route>
        <Route exact path="/theroots" component={TheRoots}></Route>

        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
