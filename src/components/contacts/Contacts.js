import React , { useState , useEffect } from 'react'
import { useSelector } from 'react-redux'  // We can access data with the help of useSelector
import Contact from './Contact'
import { selectAllContact, clearAllContact , deleteAllContact } from '../../actions/contactAction'
import { useDispatch } from 'react-redux'


const Contacts = () => {
  
  const dispatch = useDispatch()
  const [selectAll ,setSelectAll] = useState(false);
  const contacts = useSelector(state => state.contact.contacts)  // we need contact only from stae, hence using state
// contact.contacts mean s extra layer added in reducers/index.js
  const selectedContacts = useSelector((state) => state.contact.selectedContacts)  // this will select the selected contacts

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllContact(contacts.map((contact) => contact.id)));
    } else {
      dispatch(clearAllContact());
    }
  }, [selectAll]);



   return (
        <div>
          {
            selectedContacts.length >0 ? (
              <button className="btn btn-danger mb-3" onClick={() =>dispatch(deleteAllContact()) }>
                Delete all
              </button>
            ) : null
          }
            <table className="table shadow">
  <thead>
    <tr>
      <th>
        <div className="custom-control custom checkbox">
           <input
           id="selectALL"
            type ="checkbox" 
            className="custom-control-label"
            value={selectAll}
            onClick={()=> setSelectAll(!selectAll)}
            />
           <label
           htmlFor="selectALL"
           className="custom-control-label"></label>

        </div>
      </th>
      <th>Name</th>
      <th>phone</th>
      <th>Email</th>
      <th> Actions</th>
    </tr>
  </thead>
  <tbody>

    {/* Displaying the conacts which we get from the store by using useSelector*/}

    {
       contacts.map( (contact) => (
        <Contact contact ={contact} key={contact.id} selectAll={selectAll} />
       ))
    }

  </tbody>
</table>

        </div>
    )
}

export default Contacts