import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import PMShowcase from './pages/PMShowcase';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import SideProjects from './pages/SideProjects';
import Speaking from './pages/Speaking';
import PlaceholderPage from './components/PlaceholderPage';
import { portfolioData } from './data/portfolioData';

function App() {
  return (
    <Router basename="/portfolio-vijayakumar">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pm-showcase" element={<PMShowcase />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/side-projects" element={<SideProjects />} />
          <Route path="/speaking" element={<Speaking />} />
          <Route path="/contact" element={<Contact />} />

          {/* Placeholder Routes */}
          <Route path="/other-portfolios" element={
            <PlaceholderPage title="Other Portfolios" description="Check out my work on other platforms.">
              <div className="text-center space-y-6">
                <p className="text-lg mb-6 text-gray-300">Explore my detailed portfolio and case studies:</p>
                {portfolioData.otherPortfolios.map((portfolio, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all">
                    <h3 className="text-2xl font-bold mb-2 text-white">{portfolio.title}</h3>
                    <p className="text-gray-400 mb-4">{portfolio.description}</p>
                    <a href={portfolio.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                      View Portfolio →
                    </a>
                  </div>
                ))}
              </div>
            </PlaceholderPage>
          } />
          <Route path="/vibe-coding" element={
            <PlaceholderPage title="Vibe Coding" description="Exploring the intersection of coding and creativity.">
              <div className="text-center">
                <p className="text-gray-300">This section showcases my coding experiments and technical projects. Check out the Side Projects page for more details.</p>
              </div>
            </PlaceholderPage>
          } />
          <Route path="/resources" element={<PlaceholderPage title="Resources" description="Curated resources for product managers and agilists.">
            <div className="space-y-4">
              {portfolioData.resources?.map((resource, index) => (
                <div key={index} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                  <h3 className="text-xl font-bold mb-2 text-white">{resource.title}</h3>
                  <p className="text-gray-400">{resource.description}</p>
                </div>
              ))}
            </div>
          </PlaceholderPage>} />
          <Route path="/recognition" element={
            <PlaceholderPage title="Recognition" description="Awards, testimonials, and mentions.">
              <div className="grid md:grid-cols-2 gap-6">
                {portfolioData.recognition.map((award, index) => (
                  <div key={index} className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-2xl p-8 border border-yellow-500/30">
                    <div className="text-5xl mb-4">🏆</div>
                    <h3 className="text-2xl font-bold mb-2 text-white">{award.title}</h3>
                    <p className="text-yellow-400 font-semibold mb-2">{award.issuer} • {award.year}</p>
                    <p className="text-gray-300">{award.description}</p>
                  </div>
                ))}
              </div>
            </PlaceholderPage>
          } />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
