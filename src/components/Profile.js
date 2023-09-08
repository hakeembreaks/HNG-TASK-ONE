import React from "react";
import "./Profile.css";

import slackprofilepics from "../assets/slackprofilepics.jpeg";

export default function Profile() {
  const slackUserName = "Hakeem Kolawole"; // This variable holds the Slack username, set to "Hakeem Kolawole.
  const currentDayOfTheWeek = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  }); // This variable stores the current day of the week, like "Monday" or "Tuesday." It uses JavaScript's toLocaleDateString method to get this information.
  const currentUTCTime = new Date().getTime(); // This variable stores the current UTC time in milliseconds. It uses JavaScript's getTime method on a Date object to get this value.
  const myTrack = "Frontend";

  return (
    <div className="profile-container">
      <div data-testid="slackUserName">{slackUserName}</div>
      <img
        className="profile-image"
        data-testid="slackDisplayImage"
        src={slackprofilepics}
        alt={slackUserName}
      />
      <div data-testid="currentDayOfTheWeek">{currentDayOfTheWeek}</div>
      <div data-testid="currentUTCTime">{currentUTCTime}</div>
      <div data-testid="myTrack">{myTrack}</div>
    </div>
  );
}
