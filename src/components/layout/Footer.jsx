import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import profile from '../../data/profileData.json';

const Footer = () => {
  const { name, social } = profile;
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex w-full max-w-content flex-col items-center gap-5 px-5 py-10 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-muted">
          © {year} {name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-xl text-muted transition-colors hover:text-accentDeep"
          >
            <FaGithub aria-hidden="true" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-xl text-muted transition-colors hover:text-accentDeep"
          >
            <FaLinkedin aria-hidden="true" />
          </a>
          <a
            href={`mailto:${social.email}`}
            aria-label="Send an email"
            className="text-xl text-muted transition-colors hover:text-accentDeep"
          >
            <HiOutlineMail aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
