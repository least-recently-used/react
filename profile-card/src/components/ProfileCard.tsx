import './ProfileCard.css';

interface Props {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export default function ProfileCard({ name, role, bio, imageUrl }: Props) {
  return (
    <div className='box'>
        <div className="card">
        <img src={imageUrl} alt={name} className="avatar" />
        <h2>{name}</h2>
        <h4>{role}</h4>
        <p>{bio}</p>
        </div>

    </div>
    
  );
}
