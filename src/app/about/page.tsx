export const metadata = {
  title: "About | Kei Usami",
};

export default function About() {
  return (
    <main>
      <div className="flex flex-col items-center justify-between">
        <h1>About</h1>
      </div>
      <h2>I am a software engineer, web developer, and programmer.</h2>
      <h2>Location</h2>
      <ul>
        <li>South of Japan 🇯🇵</li>
      </ul>
      <h2>Languages</h2>
      <ul>
        <li>日本語</li>
        <li>English</li>
      </ul>
      <h2>Interests</h2>
      <ul>
        <li>Ocean 🌊</li>
        <li>Travel ✈️</li>
        <li>Reading 📚</li>
        <li>Guitar 🎸</li>
        <li>Music 🎧</li>
        <li>Cooking 🍳</li>
        <li>Beer 🍺</li>
        <li>...and more!</li>
      </ul>
    </main>
  );
}
