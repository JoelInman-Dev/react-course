import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupsPage() {
  // add Loading state for getting meetups
  const [isLoading, setIsLoading] = useState(true);

  // add state to hold the array of meetup objects
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // using useEffect to prevent infinite looping, the second parameter is the dependencies
  // if those depencies values change, this block (effect) is fired again
  useEffect(() => {
    // although already defaulted to true, it's good practice to set it here anyway
    setIsLoading(true);

    // using fetch(), you can define it as a POST method along with setting all the other properties for a http request,
    // you can also use `axios` to handle this instead - but i dont know that yet :)
    fetch(
      "https://react-getting-started-6aed2-default-rtdb.firebaseio.com/meetups.json"
    )
      .then((response) => {
        // this json() function also returns a promise and the data from the response body.
        return response.json();
      })
      // first create the meetups array to hold all the meetup objects and then
      // loop the data, adding each meetup record into the meetups array.
      .then((data) => {
        const meetups = [];
        // using the data from the response.json(),
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };
          // add each meetup to the meetups array
          meetups.push(meetup);
        }
        // set the state of loadedMeetups to the array of meetup objects
        // the setLoading as false to output the meetups
        setLoadedMeetups(meetups);
        setIsLoading(false);
      });
  }, []);

  // if we have all the data ready to go, then output them!
  // else show the loading text
  if (!isLoading) {
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  } else {
    return (
      <section>
        <p>Loading... </p>
      </section>
    );
  }
}

export default AllMeetupsPage;
