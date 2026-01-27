import { Link } from "react-router"

interface Props {
    isDashboard?: boolean;
}

export const Logo = ({ isDashboard }: Props) => {
    return (
        <Link
            to='/'
            className={`text-3xl font-bold tracking-tighter transition-all ${isDashboard && 'hover:scale-105'
                }`}
        >
            <p className="hidden lg:block">
                CEL<span className="text-indigo-600">TECH</span>
            </p>

            <p className="flex text-4xl lg:hidden">
                <span className="-skew-x-6">C</span>
                <span className="text-indigo-600 -skew-x-6">T</span>
            </p>
        </Link>
    );
}