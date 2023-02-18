import React from "react";
import timezones from "./timezones";

export default class Clock extends React.Component {
	constructor(props) {
		super(props);
		this.hourRef = React.createRef();
		this.minuteRef = React.createRef();
		this.secondRef = React.createRef();
	}
	parseOffset(timezone) {
		const str = timezones.find(tz => tz.code === timezone).offset;
		const crop = str.slice(0, 3);
		if (crop.startsWith('-')) {
			return  Number(crop.slice(1, 3)) * -1;
		}
		return Number(crop.slice(1, 3));
	}
	componentDidMount() {
		const offset = this.parseOffset(this.props.timezone);

		const currentSec = getSecondsToday();

		const seconds = (currentSec / 60) % 1;
		const minutes = (currentSec / 3600) % 1;
		const hours = (currentSec / 43200) % 1;

		setTime(60 * seconds, this.secondRef);
		setTime(3600 * minutes, this.minuteRef);
		setTime(43200 * hours, this.hourRef);

		function setTime(left, hand) {
			hand.current.style.animationDelay = '' + left * -1 + 's';
		}

		function getSecondsToday() {
			let now = new Date();
			const localOffset = now.getTimezoneOffset(); // minutes
			now.setTime(now.getTime() + (localOffset * 60 * 1000))
			now.setTime(now.getTime() + (offset * 3600 * 1000));

			let today = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate());
			let diff = now - today;
			return Math.round(diff / 1000);
		}
	}

	render() {
		return (
			<div className="clock">
				<div className="clock__second" ref={this.secondRef}/>
				<div className="clock__minute" ref={this.minuteRef}/>
				<div className="clock__hour" ref={this.hourRef}/>
				<div className="clock__axis"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
				<section className="clock__indicator"/>
			</div>
		)
	}
}
