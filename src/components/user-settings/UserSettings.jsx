import MoreVertIcon from "@mui/icons-material/MoreVert";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/services/auth";
import DropDown from "../drop-down/DropDown";
const UserSettings = () => {
  return (
    <DropDown
      parent={<MoreVertIcon />}
      child={
        <ul>
          <li id="incomplete">New Group</li>
          <li id="incomplete">Archived</li>
          <li id="incomplete">Starred Message</li>
          <li id="incomplete">Settings</li>
          <li onClick={() => signOut(auth)}>Logout</li>
        </ul>
      }
    />
  );
};
export default UserSettings;
