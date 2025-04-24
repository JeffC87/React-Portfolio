export default function Resume() {
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'CSS', 'HTML', 'MongoDB'];

  return (
    <div>
      <h1>Resume</h1>
      <a href="/resume.pdf" download>Download My Resume</a>
      <ul>
        {proficiencies.map((skill, idx) => <li key={idx}>{skill}</li>)}
      </ul>
    </div>
  );
}
