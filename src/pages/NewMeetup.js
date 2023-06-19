import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
  // history allows you to interact with the state of the router
  // and perform navigation from inside your components
  const history = useHistory();

  function addMeetupHandler(meetupData) {
    // Firebase Credentials - Adding `tablename.json` after the domain will create/access the table
    const MEETUP_API =
      "https://react-getting-started-6aed2-default-rtdb.firebaseio.com/meetups.json";

    // you can use axios for this, but instead using fetch you can define it as a POST method
    fetch(MEETUP_API, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // fetch returns a promise, so on success redirect.
      // .replace(), replaces the pathname stored in the history object
      history.replace("/");
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
