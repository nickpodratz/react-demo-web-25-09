import toast from "react-hot-toast";

export default function ToastButton() {
    return (
        <button className="button border-0 text-white bg-green-500" onClick={() => toast.success("Notifications working!")}>
            Send Notification    
        </button>
    )
}