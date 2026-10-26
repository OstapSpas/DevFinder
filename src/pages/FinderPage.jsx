import ProfileCard from "../components/card/ProfileCard.jsx";
import BioCard from "../components/card/BioCard.jsx";
import ProjectCard from "../components/card/ProjectCard.jsx";


import { mockUser, mockReadme, mockRepos } from "../data/user.js";
import { getAboutText } from "../data/readme.js";

export default function FinderPage() {
  const user = mockUser;
  const projects = mockRepos;
  const about = getAboutText(mockReadme);

  return (
    <div className="finder-content">
      <ProfileCard user={user} />
      <BioCard about={about} bio={user.bio} />
      <ProjectCard projects = {projects}/>
    </div>
  );
}