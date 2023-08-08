

export const Card = ({ user }) => {
    return (
      <div>
        <img
          src={user.avatar}
          alt="User avatar"
        />
        <p className="name">{user.username}</p>
        <p className="tag">@{user.tag}</p>
        <p className="location">{user.location}</p>
      </div>
    );
  };
  