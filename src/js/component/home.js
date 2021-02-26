import React, { useState, Fragment, useEffect } from "react";
import { Item } from "./item.jsx";

//create your first component
export function Home() {
	const [listItems, setListItems] = useState([]);
	const [currentValue, setValue] = useState("");

	const generateTask = e => {
		if (e.key == "Enter") {
			setListItems(listItems => [
				...listItems,
				{
					name: currentValue,
					done: false
				}
			]);
			setValue("");
		}
	};

	const deleteTodo = id => {
		const remove = listItems.filter((_, index) => index !== id);
		setListItems(remove);
	};

	const counter = () => {
		let counter = listItems.length;
		counter == "0"
			? (counter = "Sin Tareas")
			: (counter = counter + "Tarea(s) Pendiente(s)");
		return counter;
	};

	let taskList = listItems.map((item, index) => {
		return (
			<Item
				name={item.name}
				key={index}
				id={index.toString()}
				onMyClick={() => {
					deleteTodo(index);
				}}
			/>
		);
	});

	return (
		<Fragment>
			<content className="container">
				<div className="blackboard">
					<h1>Tareas Pendientes</h1>
					<form
						onSubmit={e => {
							e.preventDefault();
						}}>
						<input
							className="rounded"
							type="text"
							onChange={e => {
								setValue(e.target.value);
							}}
							onKeyPress={e => {
								generateTask(e);
							}}
							placeholder="Agregar las tareas a la lista"
							value={currentValue}
						/>
					</form>
					<div className="todoList">
						<ul>{taskList}</ul>
					</div>
					<div className="counter">{counter()}</div>
				</div>
			</content>
		</Fragment>
	);
}
