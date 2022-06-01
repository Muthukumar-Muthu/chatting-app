import MoreVertIcon from "@mui/icons-material/MoreVert";
import DropDown from "../drop-down/DropDown";
const UserSettings = () => {
  return (
    <DropDown
      parent={<MoreVertIcon />}
      child={
        <ul>
          <li>New Group</li>
          <li>Archived</li>
          <li>Starred Message</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>
      }
    />
  );
};
export default UserSettings;
