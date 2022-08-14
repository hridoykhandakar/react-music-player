import { FaMusic } from "react-icons/fa";
const Nav = ({ libraryStatus, setLibraryStatus }) => {
  // console.log(libraryStatus);
  return (
    <nav>
      <h1>Weaves</h1>
      <button onClick={() => setLibraryStatus(!libraryStatus)}>
        <span>Library</span>
        <FaMusic className="icon" />
      </button>
    </nav>
  );
};
export default Nav;
