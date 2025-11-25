import React from 'react';
import { portfolioData } from '../data/portfolioData';

const OtherPortfolios = () => {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="section-title mb-6">Other Portfolios</h1>
            <p className="text-gray-300 mb-4">Explore my work on other platforms:</p>
            <ul className="list-disc list-inside text-blue-400">
                {portfolioData.otherPortfolios && portfolioData.otherPortfolios.map((item, idx) => (
                    <li key={idx} className="mb-2">
                        <a href={item.link || portfolioData.personalInfo.notion} target="_blank" rel="noopener noreferrer" className="hover:underline">
                            {item.title || 'Notion Portfolio'}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OtherPortfolios;
