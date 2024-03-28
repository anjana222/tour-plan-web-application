import { Link, Outlet } from "react-router-dom";

function SharedLayoutHome() {
  return (
    <div className="bg-light">
      <Outlet />
      <Link to={"/FeedbackForm/"}>
        <button className="feedrotate" style={{}}>
          <span
            class="material-symbols-outlined"
            style={{ padding: "10px", color: "white" }}
          >
            comment
          </span>
        </button>
      </Link>
    </div>
  );
}

export default SharedLayoutHome;
