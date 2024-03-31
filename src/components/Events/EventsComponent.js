import "./EventsComponent.scss";
import drop from "../../assets/droplet-fill.svg";
import happyImg from "../../assets/smile.svg";
import sadImg from "../../assets/sad.svg";
import neutralImg from "../../assets/neutral.svg";
import annoyedImg from "../../assets/annoyed.svg";

export function EventsComponent(event) {
  const img =
    event?.event?.subTitle === "Happy"
      ? happyImg
      : event?.event?.subTitle === "Sad"
      ? sadImg
      : event?.event?.subTitle === "Neutral"
      ? neutralImg
      : event?.event?.subTitle === "Annoyed"
      ? annoyedImg
      : null;
  return (
    <div>
      {event.title === "Mood" ? (
        <div className="mood">
          <div className="mood-event">
            <img src={img} alt="period" />
          </div>
        </div>
      ) : null}
      {event.title === "Period" ? (
        <div className="period d-inline-flex">
          <div className="period-event">
            <img src={drop} alt="period" />
          </div>
        </div>
      ) : null}
    </div>
  );
}
