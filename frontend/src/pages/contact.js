import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>
        <h1>Contact</h1>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
