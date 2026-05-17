import { useEffect } from "react";
import { socket } from "./socket";
import { useDispatch } from "react-redux";
import { addNotification } from "../redux/notificationSlice";

export const useSocket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    socket.on("newNotification", (data) => {
      dispatch(addNotification(data));
    });

    return () => {
      socket.off("newNotification");
    };
  }, [dispatch]);
};