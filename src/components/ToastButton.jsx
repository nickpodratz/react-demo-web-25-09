import toast from "react-hot-toast";

export default function ToastButton() {
    return (
        <button className="btn-primary" onClick={() => toast.success("Notifications working!")}>
            Send Notification    
        </button>
    )
}