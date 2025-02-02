import { useContext } from "react";
import GithubContext from "../../context/app-context";
import Repo from "../../models/Repo";
import RepoItem from "./RepoItem";

interface PropsType {
  RepoList?: Repo[];
}
const Repos: React.FC<PropsType> = (props) => {
  return (
    <div className="row container d-flex justify-content-center my-2  w80Per  ">
      {props.RepoList &&
        props.RepoList.map((repo) => (
          <RepoItem key={repo.id} MyRepo={repo}></RepoItem>
        ))}
    </div>
  );
};
export default Repos;
