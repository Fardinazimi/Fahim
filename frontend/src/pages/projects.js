import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const sample = [
    { id: 1, title: 'Project One', description: 'A cool project', image: '/images/project1.jpg' }
  ];
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Projects</h1>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
          {sample.map(p => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
