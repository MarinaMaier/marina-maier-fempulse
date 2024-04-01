import "./EventModal.scss";
import closeIcon from "../../assets/close-24px.svg";
import happyImg from "../../assets/smile.svg";
import happyImgFilled from "../../assets/smile-fill.svg";
import sadImg from "../../assets/sad.svg";
import sadImgFilled from "../../assets/sad-fill.svg";
import neutralImg from "../../assets/neutral.svg";
import neutralImgFilled from "../../assets/neutral-fill.svg";
import annoyedImg from "../../assets/annoyed.svg";
import annoyedImgFilled from "../../assets/annoyed-fill.svg";
import drop from "../../assets/droplet.svg";
import dropFilled from "../../assets/droplet-fill.svg";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { useState } from "react";


export function EventModal({ selectedEvents, clickClose }) {
  const [events, setEvents] = useState(selectedEvents);

  const addEvent = (title, subTitle) => {
    const isExistingIndex = events.findIndex(
      (event) => event.title === title && event.subTitle === subTitle
    );
    const newSelectedEvents =
      isExistingIndex !== -1
        ? [...events.slice(0, isExistingIndex), ...events.slice(isExistingIndex + 1)]
        : [
            ...events.filter((event) => event.title !== title),
            {
              start: selectedEvents.start,
              end: selectedEvents.end,
              title: title,
              subTitle: subTitle,
            },
          ]
    setEvents(newSelectedEvents.sort((a, b) => a.title.localeCompare(b.title)));
  };

  const checkExistingEvent = (title, subTitle) => {
    return !!events?.filter(
      (event) => event.title === title && event.subTitle === subTitle
    ).length;
  };

  const closeModal = () => {
    clickClose(events);
  }

  return (
    <main className="event-modal">
      <section className="event-modal__section">
        <img
          className="event-modal__close-icon"
          src={closeIcon}
          alt="close"
          onClick={closeModal}
        />
        <section className="event-modal__content">
          <h1 className="event-modal__header">Add event</h1>
          <section className="event-modal__body">
            <div className="event-modal__mood">
              <div className="event-modal__container">
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-custom" id="tooltip">
                      I'm feeling happy
                    </Tooltip>
                  }
                >
                  <div
                    className="event-modal__mood-icon"
                    onClick={() => addEvent("Mood", "Happy")}
                  >
                    <img
                      src={
                        checkExistingEvent("Mood", "Happy")
                          ? happyImgFilled
                          : happyImg
                      }
                      alt="mood"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-custom" id="tooltip">
                      I'm feeling ok
                    </Tooltip>
                  }
                >
                  <div
                    className="event-modal__mood-icon"
                    onClick={() => addEvent("Mood", "Neutral")}
                  >
                    <img
                      src={
                        checkExistingEvent("Mood", "Neutral")
                          ? neutralImgFilled
                          : neutralImg
                      }
                      alt="mood"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-custom" id="tooltip">
                      I'm feeling annoyed
                    </Tooltip>
                  }
                >
                  <div
                    className="event-modal__mood-icon"
                    onClick={() => addEvent("Mood", "Annoyed")}
                  >
                    <img
                      src={
                        checkExistingEvent("Mood", "Annoyed")
                          ? annoyedImgFilled
                          : annoyedImg
                      }
                      alt="mood"
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  placement="bottom"
                  overlay={
                    <Tooltip className="tooltip-custom" id="tooltip">
                      I'm feeling sad
                    </Tooltip>
                  }
                >
                  <div
                    className="event-modal__mood-icon"
                    onClick={() => addEvent("Mood", "Sad")}
                  >
                    <img
                      src={
                        checkExistingEvent("Mood", "Sad")
                          ? sadImgFilled
                          : sadImg
                      }
                      alt="mood"
                    />
                  </div>
                </OverlayTrigger>
              </div>
            </div>
            <OverlayTrigger
              placement="bottom"
              overlay={
                <Tooltip className="tooltip-custom" id="tooltip">
                  Periods
                </Tooltip>
              }
            >
              <div className="event-modal__period">
                <div
                  className="event-modal__mood-icon"
                  onClick={() => addEvent("Period", "Period")}
                >
                  <img
                    src={
                      checkExistingEvent("Period", "Period") ? dropFilled : drop
                    }
                    alt="period"
                  />
                </div>
              </div>
            </OverlayTrigger>
          </section>
        </section>
      </section>
    </main>
  );
}
