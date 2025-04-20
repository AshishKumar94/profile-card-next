import { ProfileCard, type ProfileCardProps } from './components/ProfileCard';

const blogCards = [
  {
    profileId: 1,
    profileImage: '/profile.jpeg',
    title: 'Sarah Dole',
    subTitle: 'Front End Engineer @ Microsoft',
    description:
      'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.',
    githubUrl: 'https://github.com/sarah-dole',
    linkedinUrl: 'https://www.linkedin.com/in/sarah-dole/',
    twitterUrl: 'https://twitter.com/sarah_dole',
    instagramUrl: 'https://www.instagram.com/sarah_dole/',
  },
] as ProfileCardProps[];

export default function Home() {
  return (
    <div
      className="grid min-h-screen grid-rows-[20px_1fr_20px] justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20"
      style={{ background: 'linear-gradient(#f9fafb, #d2d6db)' }}
    >
      <main className="row-start-1 flex flex-col items-center gap-[32px] sm:items-start" style={{ marginTop: '40px' }}>
        {blogCards.map((card) => {
          return <ProfileCard key={card.profileId} {...card} />;
        })}
      </main>
    </div>
  );
}
