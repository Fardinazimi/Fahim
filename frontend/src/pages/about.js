import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>About Me</h1>
        <p>Short bio about you. Customize this content.</p>
      </main>
      <Footer />
    </>
  );
}
