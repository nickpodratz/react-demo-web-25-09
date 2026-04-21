import toast from "react-hot-toast";

export default function ToastButton() {
    return (
        <button onClick={() => toast.success("Notifications working!")}>
            Send Notification    
        </button>
    )
}