import { useSelector, useDispatch } from "react-redux";
import { markAllRead } from "../redux/notificationSlice";

const Dashboard = () => {
  const { list, unreadCount } = useSelector(
    (state) => state.notifications
  );
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Dashboard</h2>

      <div>
        🔔 Notifications ({unreadCount})
        <button onClick={() => dispatch(markAllRead())}>
          Mark all read
        </button>
      </div>

      <ul>
        {list.map((n, i) => (
          <li key={i}>{n.message}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;