import { useEffect } from "react";

function Toast({ message, onClose, duration = 3000 }) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 right-6 max-w-xs w-full bg-kelly_green-600 text-white px-6 py-3 rounded-md shadow-lg font-medium animate-slide-in">
      {message}
    </div>
  );
}

export default Toast;