import "./styles.css";
import Card from "./components/Card";
import emojis from "./data";
import Footer from "./components/Footer";

function createCard(entry) {
  return (
    <Card
      key={entry.id}
      emoji={entry.emoji}
      name={entry.name}
      meaning={entry.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">Emojipedia</h1>

      <div className="container">
        {emojis.map(createCard)}
        {/* <Card
          emoji="ðª"
          name="Tense Biceps"
          meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also
        used in connection with doing sports, e.g. at the gym."
        />

        <Card
          emoji="ðª"
          name="Tense Biceps"
          meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also
        used in connection with doing sports, e.g. at the gym."
        />

        <Card
          emoji="ðª"
          name="Tense Biceps"
          meaning="âYou can do that!â or âI feel strong!â Arm with tense biceps. Also
        used in connection with doing sports, e.g. at the gym."
        /> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
