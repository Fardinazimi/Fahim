import Image from 'next/image';

export default function ProjectCard({ title, description, image }) {
  return (
    <article style={{ border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
      <div style={{ position: 'relative', width: '100%', height: 160 }}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '1rem' }}>
        <h3>{title}</h3>
        <p style={{ color: '#555' }}>{description}</p>
      </div>
    </article>
  );
}
