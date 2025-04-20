import Image from 'next/image';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export type ProfileCardProps = {
  profileId: number;
  profileImage: string;
  title: string;
  subTitle: string;
  description: string;
  githubUrl?: string;
  linkedinUrl?: string;
  twitterUrl?: string;
  instagramUrl?: string;
};

const ProfileCard = ({
  profileImage,
  title,
  subTitle,
  description,
  githubUrl,
  linkedinUrl,
  twitterUrl,
  instagramUrl,
}: ProfileCardProps) => {
  return (
    <div
      className="px-4 py-6 flex-col justify-items-center bg-white rounded-lg"
      style={{ width: '340px', height: '428px' }}
    >
      <Image src={profileImage} width={64} height={64} alt="Profile Image" className="mb-6" />
      <h3 className="text-[20px] font-medium" style={{ color: '#171717' }}>
        {title}
      </h3>
      <h4 className="text-[14px] font-regular leading-5 mb-6" style={{ color: '#525252' }}>
        {subTitle}
      </h4>
      <p className="text-center text-[16px] font-normal mb-10" style={{ color: '#525252' }}>
        {description}
      </p>
      <button
        className="w-full mb-6 rounded-sm text-white bg-indigo-700 hover:bg-indigo-800 text-[16px]"
        style={{ width: '308px', height: '44px' }}
      >
        Contact me
      </button>
      <div className="flex flex-row gap-8 justify-items-center items-center h-9">
        {githubUrl && (
          <a href={githubUrl} target="_blank" rel="noreferrer">
            <GitHubIcon className="text-indigo-700" />
          </a>
        )}
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noreferrer">
            <LinkedInIcon className="text-indigo-700" />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noreferrer">
            <InstagramIcon className="text-indigo-700 fill-indigo-700" />
          </a>
        )}
        {twitterUrl && (
          <a href={twitterUrl} target="_blank" rel="noreferrer">
            <XIcon className="text-indigo-700" />
          </a>
        )}
      </div>
    </div>
  );
};

export { ProfileCard };
