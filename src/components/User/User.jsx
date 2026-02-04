import React from 'react';

const User = (props) => {
    const { name, html_url, description, language, stargazers_count, forks_count } = props.repo;
    
    return (
        <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="block glass rounded-2xl p-6 hover:shadow-2xl hover:shadow-blue-500/30 transition-smooth hover-scale group"
        >
            <div className="flex flex-col h-full">
                {/* Repository Name */}
                <div className="flex items-start justify-between mb-3">
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-smooth flex-1 pr-2">
                        {name}
                    </h4>
                    <svg className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-smooth flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                </div>

                {/* Description */}
                {description && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
                        {description}
                    </p>
                )}

                {/* Bottom Section */}
                <div className="flex items-center justify-between pt-3 border-t border-blue-100 mt-auto">
                    {/* Language */}
                    {language && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full border border-blue-200">
                            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                            {language}
                        </span>
                    )}

                    {/* Stats */}
                    <div className="flex items-center gap-3 text-gray-600 text-sm">
                        {stargazers_count > 0 && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                                {stargazers_count}
                            </span>
                        )}
                        {forks_count > 0 && (
                            <span className="flex items-center gap-1">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path>
                                </svg>
                                {forks_count}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </a>
    );
};

export default User;