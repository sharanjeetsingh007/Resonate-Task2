import React from 'react'
import "./ContactsTable.css"

function ContactsTable({ name, username, email, phone, website, company, address, handleClick }) {
    return (
        <div className="contactsTable__row" onClick={handleClick}>
            <p>{name}</p>
            <p>{username}</p>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>

    )
}

export default ContactsTable