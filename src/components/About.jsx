import React from 'react';
import { resumeData } from '../data/resume';

const About = () => {
    return (
        <section id="about-details" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                    {/* Education */}
                    <div>
                        <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>/</span> Education
                        </h2>
                        {resumeData.education.map((edu, index) => (
                            <div key={index} style={{ marginBottom: '2rem', paddingLeft: '1rem', borderLeft: '2px solid var(--accent-primary)' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{edu.title}</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{edu.institution}</p>
                                <p style={{ fontSize: '0.9rem', color: 'var(--accent-secondary)' }}>{edu.year}</p>
                                {edu.details && <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginTop: '0.5rem' }}>{edu.details}</p>}
                            </div>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div>
                        <h2 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <span style={{ color: 'var(--accent-primary)' }}>/</span> Certifications & Awards
                        </h2>
                        <ul style={{ listStyle: 'none' }}>
                            {resumeData.certificates.map((cert, index) => (
                                <li key={index} style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
                                    <span style={{ color: 'var(--accent-secondary)' }}>▹</span>
                                    <span style={{ color: 'var(--text-secondary)' }}>{cert}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <style>
                {`
                    @media (max-width: 768px) {
                        div[style*="grid-template-columns"] {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}
            </style>
        </section>
    );
};

export default About;
