import React, { useEffect, useState } from 'react'
import ContactsTable from '../ContactsTable/ContactsTable'
import "./AllContacts.css"
import SearchIcon from '@mui/icons-material/Search';
import ContactDetail from '../ContactDetail/ContactDetail';
import Spinner from '../Spinner/Spinner';



function AllContacts({ theme }) {

    // states
    const [contactsData, setContactsData] = useState([])
    const [copyContactsData, setCopyContactsData] = useState([])
    const [searchValue, setSearchValue] = useState("")
    const [detailShow, setDetailShow] = useState(false)
    const [idChange, setIdChange] = useState(null)
    const [loader, setLoader] = useState(true)

    // change state from child component
    const changedetailShow = (value) => {
        setDetailShow(value)
    }

    // Show the detail component toggle
    const handleClick = (id) => {
        setIdChange(id)
        setDetailShow(true)
    }

    useEffect(() => {
        const search = () => {

            if (searchValue !== "") {
                const searchFilter = contactsData.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase() || searchValue.toUpperCase()) || contact.email.toLowerCase().includes(searchValue.toLowerCase() || searchValue.toUpperCase()))
                setContactsData(searchFilter)
            } else {
                setContactsData(copyContactsData)

            }
        }
        search()
    }, [searchValue, contactsData, copyContactsData])

    // fetching contacts data from API
    useEffect(() => {
        const fetchingDate = async () => {
            try {
                const request = await fetch("https://jsonplaceholder.typicode.com/users")
                const response = await request.json();
                setContactsData(response)
                setCopyContactsData(response)
                setLoader(false)
            } catch (err) {
                setLoader(false)
                alert(err)
            }
        }
        fetchingDate()
    }, [])

    return (<>{loader ? <Spinner /> :
        <>
            {detailShow ? <ContactDetail
                changedetailShow={changedetailShow}
                contactsData={contactsData}
                idChange={idChange}
                theme={theme}
            /> :
                <div className={theme ? 'allContacts--dark__mode' : 'allContacts'}>
                    <div className={theme ? 'allContacts__wrapper--dark__mode' : 'allContacts__wrapper'}>
                        <div className="allContacts__heading">
                            <h4>Contacts</h4>
                            <div className='allContacts__heading__search'>
                                <SearchIcon style={{ marginLeft: "7px", fontSize: '19px' }} />
                                <input type="text" placeholder="Search Name/Email..."
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className='contactsTable'>
                            <div className={theme ? 'contactsTable__header--dark__mode' : 'contactsTable__header'}>
                                <h4>Name</h4>
                                <h4>Username</h4>
                                <h4>Email</h4>
                                <h4>Phone</h4>
                                <h4>Website</h4>
                            </div>
                            {contactsData.map((contacts) => (
                                <ContactsTable
                                    key={contacts.id}
                                    id={contacts.id}
                                    name={contacts.name}
                                    username={contacts.username}
                                    email={contacts.email}
                                    phone={contacts.phone}
                                    website={contacts.website}
                                    company={contacts.company}
                                    address={contacts.address}
                                    detailShow={detailShow}
                                    handleClick={() => handleClick(contacts.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            }
        </>
    }
    </>
    )
}

export default AllContacts