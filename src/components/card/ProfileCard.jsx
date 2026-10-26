import ButtonGitHub from "../button/ButtonGitHub";

export default function ProfileCard({ user }) {
  return (
    <div className="card-content">
      <div className="card-logo">
        <img src={user.avatar_url} alt={user.login} />
      </div>

      <div className="card-info">
        <p className="card-userName">{user.name || user.login}</p>
        
        {user.bio && <p className="card-smallBioUser">{user.bio}</p>}
        {user.location && <p className="card-location">{user.location}</p>}
        {user.created_at && <p className="card-created-user">{user.created_at}</p>}


      </div>

      <ButtonGitHub
        buttonName="Open GitHub"
        className="button-finder"
        type="button"
        // onClick= {() => console.log("Clicked GitHub")}
        href = {user.html_url}
/>
    </div>
  );
}