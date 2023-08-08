import { FaceCard, FaceImage, FaceName, FaceContacts } from './Card.styled';

export const Card = ({ user }) => {
    return (
      <FaceCard>
        <FaceImage
          src={user.avatar}
          alt="User avatar"
        />
        <FaceName className="name">{user.username}</FaceName>
        <FaceContacts className="tag">@{user.tag}</FaceContacts>
        <FaceContacts className="location">{user.location}</FaceContacts>
      </FaceCard>
    );
  };
  