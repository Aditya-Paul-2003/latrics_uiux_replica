import { io } from "socket.io-client";
import { frontendConfig } from "../app/config";

/**
 * Socket.IO Factory Wrapper
 * 
 * Configuration Details:
 * - `autoConnect: false` Forces the developer to manually call .connect() inside a `useEffect`, 
 *    preventing accidental phantom connections on module load.
 * - `transports: ["websocket"]` Bypasses HTTP long-polling and forces true WebSockets immediately for lower latency.
 * - `reconnectionAttempts: 5` Stops infinitely pinging the server if the backend is permanently down.
 */
export function createLiveSocket() {
  return io(frontendConfig.apiBaseUrl, {
    autoConnect: false,
    transports: ["websocket"],
    reconnection: true,
    reconnectionAttempts: 5,
    reconnectionDelay: 1500
  });
}
