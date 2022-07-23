import moment from "moment";
import React, { useContext } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";

const Event = ({ type, title, date }) => {
	const { theme } = useContext(GlobalContext);
	const showIcon = (e) => {
		switch (e) {
			case "birthday":
				return "cake";
			case "anniversary":
				return "cake";
			case "meeting":
				return "group";
			case "festival":
				return "festival";
			case "ceremony":
				return "celebration";
			default:
				return "event";
		}
	};
	const getColor = (e) => {
		switch (e) {
			case "birthday":
				return "blue";
			case "anniversary":
				return "pink";
			case "meeting":
				return "indigo";
			case "festival":
				return "purple";
			case "ceremony":
				return "green";
			default:
				return "bgcolor";
		}
	};
	return (
		<div
			className="events-body-event event"
			style={{
				backgroundColor: `var(--${getColor(type)}-${
					theme === "light" ? "100" : "700"
				})`,
			}}
		>
			<div className="event__icon">
				<MaterialIcons>{showIcon(type)}</MaterialIcons>
			</div>
			<div className="event-details">
				<div className="event-details__title">{title}</div>
				<div className="event-details__date">
					{moment(date).format("YYYY-MMM-DD")}
				</div>
			</div>
		</div>
	);
};

export default Event;
