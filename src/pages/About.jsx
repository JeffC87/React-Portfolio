import avatar from '../assets/image.png';

export default function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={avatar} alt="Avatar" style={{ width: 150, borderRadius: '50%' }} />
      <p>Hello! I’m a web developer with a passion for modern frontend tech...</p>
    </div>
  );
}
