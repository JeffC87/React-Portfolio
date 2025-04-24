import ProjectCard from '../components/ProjectCard';

const projects = [
  {
    title: 'Weather App',
    image: 'https://via.placeholder.com/300',
    deployed: 'https://your-app.netlify.app',
    github: 'https://github.com/yourusername/weather-app'
  },
  // Add 5 more projects here
];

export default function Portfolio() {
  return (
    <section>
      <h1>My Work</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
