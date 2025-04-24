export default function ProjectCard({ title, image, deployed, github }) {
    return (
      <div style={{ border: '1px solid #ccc', padding: '1rem', width: 300 }}>
        <h3>{title}</h3>
        <img src={image} alt={title} style={{ width: '100%' }} />
        <p>
          <a href={deployed} target="_blank">Live</a> | 
          <a href={github} target="_blank"> GitHub</a>
        </p>
      </div>
    );
  }
  