import { useState, useEffect } from "react";

import List from "./List";
import Form from "./Form";
import "./style.css";

const Contacts = () => {
	const [contacts, setContacts] = useState([]);

	useEffect(() => {
		console.log(contacts);
	}, [contacts]);

	return (
		<div className="contacts">
			<h1>Contacts</h1>
			<List contacts={contacts} setContacts={setContacts} />
			<Form addContact={setContacts} contacts={contacts} />
		</div>
	);
};

export default Contacts;
