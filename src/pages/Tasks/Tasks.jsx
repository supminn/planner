import React, { useContext, useEffect, useState } from "react";
import Fab from "../../components/Button/Fab";
import Empty from "../../components/Empty/Empty";
import GlobalContext from "../../Context/GlobalContext";
import Masonry, { MasonryBox } from "../../Layout/Masonry/Masonry";
import { tasksNavLinks } from "../../utils/navigation";
import AddTask from "./AddTask";
import Task from "./Task";
import "./tasks.css";
import nullTasks from "../../images/nullTasks.svg";

const Tasks = () => {
	const [showAddTaskBox, setShowAddTaskBox] = useState(false);
	const { setSideBarLinks, tasks, getAllTasks } = useContext(GlobalContext);
	useEffect(() => {
		setSideBarLinks(tasksNavLinks);
		window.scrollTo(0, 0);
		getAllTasks();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [setSideBarLinks]);

	return (
		<main className="tasks">
			{tasks?.length > 0 && tasks.some((p) => !p.done) ? (
				<>
					<section className="tasks-head">
						<span>Tasks</span>
					</section>
					<section className="tasks-body">
						<div className="tasks-body-section">
							<span className="tasks-body-section__head">
								My Tasks
							</span>
							<div className="tasks-body-section__body">
								<Masonry lg={4} md={3} sm={2}>
									{tasks?.map(
										(task, index) =>
											!task?.done &&
											!task?.trashed && (
												<MasonryBox key={index}>
													<Task {...task} />
												</MasonryBox>
											)
									)}
								</Masonry>
							</div>
						</div>
					</section>
				</>
			) : (
				<Empty
					img={nullTasks}
					text="No Task Yet"
					cta={{
						text: "Add a task",
						icon: "add", 
						action: () => setShowAddTaskBox(true),
					}}
				/>
			)}
			<Fab icon="add_task" onClick={() => setShowAddTaskBox(true)} />
			{showAddTaskBox && (
				<AddTask close={() => setShowAddTaskBox(false)} />
			)}
		</main>
	);
};

export default Tasks;
