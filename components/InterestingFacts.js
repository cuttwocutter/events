import React from 'react';

const InterestingFacts = () => {
    const facts = [
        { number: '18', label: 'Years of Experienced' },
        { number: '351', label: 'Happy Clients' },
        { number: '564', label: 'Finished Projects' },
        { number: '300', label: 'Working Days' },
    ];

    return (
        <div className="bg-gray-900 text-white py-16 px-4 md:px-8 overflow-hidden relative">
            {/* Background pattern (simplified representation) */}
            <div className="absolute inset-0 bg-repeat opacity-20" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2740%27 height=%2740%27 viewBox=%270 0 40 40%27%3E%3Cg fill=%27%23ffffff%27 fill-opacity=%270.4%27%3E%3Cpath fill-rule=%27evenodd%27 d=%27M0 0h20v20H0V0zm20 20h20v20H20V20z%27/%3E%3C/g%3E%3C/svg%3E")' }}></div>

            <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
                {/* Title Section */}
                <div className="mb-10 md:mb-0 md:w-1/4">
                    <p className="text-gray-400 text-sm uppercase tracking-wider">Some</p>
                    <h2 className="text-4xl font-bold mt-1">Interesting Facts</h2>
                </div>

                {/* Facts Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 md:w-3/4">
                    {facts.map((fact) => (
                        <div key={fact.number} className="text-center">
                            <p className="text-3xl lg:text-4xl font-bold text-white">{fact.number}</p>
                            <p className="text-gray-400 text-xs mt-2 uppercase tracking-wider">{fact.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default InterestingFacts;