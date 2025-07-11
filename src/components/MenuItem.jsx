import { Link } from "react-router-dom";

function MenuItem({ icon: Icon, text, to }) {
    return (
        <Link to={to} className="flex items-center gap-3 p-2 rounded-md hover:bg-violet-500 hover:text-white">
            <Icon className="h-5 w-5" />
            <span className="font-medium">{text}</span>
        </Link>
    );
}

export default MenuItem;