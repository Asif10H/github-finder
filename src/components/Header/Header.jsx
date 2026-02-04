import React, { useState } from 'react';
import Home from '../Home/Home.jsx';

const Header = () => {
    const [user, setUser] = useState("asif10h");
    const [githubUser, setGithubUser] = useState("asif10h");

    const handleUserName = (e) => {
        setUser(e.target.value);
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        if (user.trim()) {
            setGithubUser(user.trim());
        }
    }

    return (
        <div className="relative z-10">
            {/* Hero Section */}
            <div className="pt-16 pb-8 px-4 text-center animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-black mb-4">
                    <span className="gradient-text">GitHub</span>{' '}
                    <span className="text-gray-900">Profile Search</span>
                </h1>
                <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    Discover and explore GitHub profiles with a modern interface
                </p>

                {/* Search Bar */}
                <div className="max-w-2xl mx-auto mb-8">
                    <form onSubmit={handleFormSubmit} className="relative">
                        <div className="glass-dark rounded-2xl p-2 shadow-2xl hover:shadow-blue-500/20 transition-smooth">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="flex-1 relative group">
                                    <svg className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-blue-600 transition-smooth" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    <input
                                        className="w-full bg-blue-50/50 text-gray-900 placeholder-gray-500 pl-12 pr-4 py-4 rounded-xl border border-blue-100 focus:border-blue-500 focus:bg-white transition-smooth outline-none"
                                        onChange={handleUserName}
                                        type="text"
                                        placeholder="Enter GitHub username..."
                                        defaultValue={user}
                                    />
                                </div>
                                <button
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-bold rounded-xl hover:from-blue-700 hover:to-blue-600 hover:shadow-2xl hover:shadow-blue-500/30 transition-smooth hover-scale active:scale-95"
                                    type="submit"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                        </svg>
                                        Search
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Home Component */}
            <Home githubUser={githubUser} />
        </div>
    );
};

export default Header;