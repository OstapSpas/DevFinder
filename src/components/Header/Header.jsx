
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'


export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <Link to='/'>DevFinder</Link>
            </div>
        </header>
    );
}