import { useEffect, useState } from "react";
import { createLiveSocket } from "../services/socket";

const initialLiveState = {
  metrics: [],
  activity: [],
  generatedAt: null,
  error: null
};

/**
 * Custom Hook: Manages live Socket.IO connection for the Milestones dashboard.
 * 
 * Lifecycle:
 * - `useEffect` mounts: establishes a persistent WebSocket connection.
 * - Subscribes to `live:update` to sync React state with backend emissions.
 * - `useEffect` unmounts: disconnects socket to prevent memory leaks and zombie connections.
 * 
 * @returns {Object} { metrics, activity, generatedAt, error } 
 */
export function useLiveOperations() {
  const [live, setLive] = useState(initialLiveState);

  useEffect(() => {
    const socket = createLiveSocket();

    const handleUpdate = (data) => setLive({ ...data, error: null });
    const handleError = (err) => setLive((prev) => ({ ...prev, error: err.message || "Connection error" }));

    socket.connect();
    socket.on("live:update", handleUpdate);
    socket.on("connect_error", handleError);

    return () => {
      socket.off("live:update", handleUpdate);
      socket.off("connect_error", handleError);
      socket.disconnect();
    };
  }, []);

  return live;
}
