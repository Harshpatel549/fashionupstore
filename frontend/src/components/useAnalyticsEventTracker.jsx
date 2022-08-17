import React from "react";
import ReactGA from "react-ga";

const useAnalyticsEventTracker = (category="Blog category") => {
    const eventTracker = (action = "form filled", label = "user have filled contact form") => {
        ReactGA.event({category, action, label});
    }
    return eventTracker;
}
export default useAnalyticsEventTracker;