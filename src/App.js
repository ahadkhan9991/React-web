import React from 'react'
import './styles/App.scss'
import Navbar from "./components/elements/Navbar"
import AddContact from './components/contacts/AddContact'
import Contacts from "./components/contacts/Contacts"
import { Provider } from "react-redux"
import store from "./store"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import EditContact from './components/contacts/EditContact'


function App() {
  return (
    
 <Provider store={store}>
    <Router>
    <div className="App">
         <Navbar />
         <div className="container">
            <div className="py3"> {/* py3 means padding top and botton px */ }
              <Switch>
                 <Route exact path ="/" component= {Contacts}  />
                 <Route exact path ="/contacts/add" component = {AddContact}  />
                 <Route exact path ="/contacts/edit/:id" component = {EditContact}  />
              </Switch>
            </div>
         </div>
       </div>
    </Router>
 </Provider>

  
     )
}
export default App