import React, { useEffect, useState } from 'react'
import "./ContactDetail.css"
import Avatar from "../../Assets/avatar4.png"


function ContactDetail({ changedetailShow, contactsData, idChange, theme }) {

    // state for filtered data 
    const [filterData, setFilterData] = useState([])

    // filter data as soon as got the id from AllContact
    useEffect(() => {
        const filterDate = async () => {
            if (idChange) {
                const filter = contactsData.filter((contact) => contact.id === idChange)
                setFilterData(filter)
            }
        }
        filterDate()
    }, [idChange, contactsData])


    return (
        <div className={theme ? 'contactDetail--dark_mode' : 'contactDetail'}>
            <button className={theme ? 'contactDetail-backBtn--dark_mode' : 'contactDetail-backBtn'}
                onClick={() => changedetailShow(false)}>
                Back
            </button>
            <div className={theme ? 'contactDetail__wrapper--dark_mode' : 'contactDetail__wrapper'}>
                <div className="contactDetail__heading">
                    <h4>Contacts Detail</h4>
                </div>
                <div className="contactDetail__info">
                    <div className="contactDetail__info__left">
                        <img src={Avatar} alt="profile__image" />
                    </div>
                    <div className="contactDetail__info__right">
                        {filterData.length !== 0 && filterData.map((filtered) => (
                            <div className="contactDetail__info--details" key={filtered.id}>
                                <div className='row-1 row'><h4>Name:</h4> <p>{filtered.name}</p></div>
                                <div className='row-2 row'><h4>Username:</h4> <p>{filtered.username}</p></div>
                                <div className='row-3 row'><h4>Email:</h4> <p>{filtered.email}</p></div>
                                <div className='row-4 row'><h4>Phone:</h4> <p>{filtered.phone}</p></div>
                                <div className='row-5 row'><h4>Address:</h4> <p>{filtered.address?.suite}{""}{filtered.address?.street}{""}{filtered.address?.city}</p></div>
                                <div className='row-6 row'><h4>Company:</h4> <p>{filtered.company?.name}{""}{filtered.company?.catchPhrase}</p></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactDetail
