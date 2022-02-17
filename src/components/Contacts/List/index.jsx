import { useState, useEffect } from "react";

const List = ({ contacts, setContacts }) => {
	const [filter, setFilter] = useState("");

	useEffect(() => {
		console.log(filter);
	}, [filter]);

	const filteredContacts = contacts.filter((item) => {
		return Object.keys(item).some((key) =>
			item[key].toString().toLowerCase().includes(filter.toLowerCase())
		);
	});

	const removeContact = (id) => {
		setContacts(contacts.filter((contact) => contact.id !== id));
	};

	return (
		<div>
			<input
				placeholder="Filter Contact"
				value={filter}
				onChange={(event) => setFilter(event.target.value)}
			/>
			<ul>
				{filteredContacts.map((item, index) => (
					<li key={index}>
						<span className="name">{item.name}</span>

						<span className="phone">
							{item.phone}
							<i
								className="fas fa-trash"
								onClick={() => removeContact(item.id)}
							></i>
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
