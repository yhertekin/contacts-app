import { useState } from "react";

const initialFormValues = { name: "", phone: "" };
const Form = ({ contacts, addContact }) => {
	const [form, setForm] = useState(initialFormValues);

	const onChangeForm = (event) => {
		setForm({
			...form,
			[event.target.name]: event.target.value,
		});
	};

	const onSubmitForm = (event) => {
		event.preventDefault();
		if (form.name === "" || form.phone === "") return false;
		addContact([...contacts, { ...form, id: Math.random() }]);
		setForm(initialFormValues);
	};

	return (
		<form onSubmit={onSubmitForm}>
			<div>
				<input
					name="name"
					placeholder="Contact Name"
					value={form.name}
					onChange={onChangeForm}
				/>
			</div>
			<div>
				<input
					name="phone"
					placeholder="Contact Phone Number"
					value={form.phone}
					onChange={onChangeForm}
				/>
			</div>
			<button>Add Contact</button>
		</form>
	);
};

export default Form;
