import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Mail } from 'lucide-react';
import { resumeData } from '../data/resume';

const Hero = () => {
    return (
        <section id="about" className="container hero-section" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '60px'
        }}>
            <div className="hero-content" style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(300px, 1fr) minmax(300px, 1fr)',
                gap: '4rem',
                alignItems: 'center',
                width: '100%'
            }}>
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h2 style={{ color: 'var(--accent-primary)', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>
                        Hello, I am
                    </h2>
                    <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', lineHeight: 1.1 }}>
                        {resumeData.personalInfo.name}
                    </h1>
                    <h3 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        {resumeData.personalInfo.title}
                    </h3>
                    <p style={{ maxWidth: '500px', marginBottom: '2rem', color: 'var(--text-secondary)' }}>
                        {resumeData.personalInfo.objective}
                    </p>

                    <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                        <a href={resumeData.personalInfo.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Github size={20} /> GitHub
                        </a>
                        <a href={resumeData.personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Linkedin size={20} /> LinkedIn
                        </a>
                    </div>
                </motion.div>

                {/* Right Content - Terminal Visual */}
                <motion.div
                    className="terminal-card"
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: [0, -15, 0], // Floating animation
                    }}
                    transition={{
                        opacity: { duration: 0.8, delay: 0.2 },
                        scale: { duration: 0.8, delay: 0.2 },
                        y: {
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }
                    }}
                    whileHover={{
                        rotateY: 5,
                        rotateX: -5,
                        scale: 1.02,
                        boxShadow: '0 25px 50px -12px rgba(0, 243, 255, 0.2)'
                    }}
                    style={{
                        background: 'var(--bg-card)',
                        padding: '1.5rem',
                        borderRadius: '0.75rem',
                        border: '1px solid rgba(0, 243, 255, 0.1)',
                        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        backdropFilter: 'blur(10px)',
                        fontFamily: 'var(--font-mono)',
                        perspective: '1000px',
                        transformStyle: 'preserve-3d'
                    }}
                >
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(148, 163, 184, 0.1)' }}>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ef4444' }}></div>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#f59e0b' }}></div>
                        <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#10b981' }}></div>
                        <div style={{ marginLeft: 'auto', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>zsh — 80x24</div>
                    </div>
                    <div style={{ color: '#e2e8f0' }}>
                        <p>
                            <span style={{ color: '#00ff9d' }}>➜</span>
                            <span style={{ color: 'var(--accent-primary)', margin: '0 0.5rem' }}>~</span>
                            <span style={{ color: 'var(--text-primary)' }}>neofetch</span>
                        </p>
                        <br />
                        <div className="terminal-content" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2rem', alignItems: 'start' }}>
                            <div style={{
                                color: 'var(--accent-primary)',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: '1rem',
                                background: 'rgba(0, 243, 255, 0.1)',
                                borderRadius: '0.5rem'
                            }}>
                                <Terminal size={48} />
                            </div>
                            <div style={{ fontSize: '0.9rem', lineHeight: 1.8 }}>
                                <p><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>User:</span> {resumeData.personalInfo.name}</p>
                                <p><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>Role:</span> DevOps Engineer</p>
                                <p><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>Shell:</span> zsh</p>
                                <p><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>Cloud:</span> AWS (EC2, EBS)</p>
                                <p><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>OS:</span> Linux, Windows</p>
                                <p><span style={{ color: 'var(--accent-primary)', fontWeight: 'bold' }}>Uptime:</span> 24/7 Learning</p>
                            </div>
                        </div>
                        <p className="cursor-animate" style={{ marginTop: '1.5rem' }}>
                            <span style={{ color: '#00ff9d' }}>➜</span>
                            <span style={{ color: 'var(--accent-primary)', margin: '0 0.5rem' }}>~</span>
                            <span className="blinking-cursor" style={{ background: 'var(--text-secondary)', width: '10px', height: '1.2rem', display: 'inline-block', verticalAlign: 'middle' }}></span>
                        </p>
                    </div>
                </motion.div>
            </div>
            <style>
                {`
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            .blinking-cursor {
                animation: blink 1s step-end infinite;
            }
            
            /* Responsive Styles */
            @media (max-width: 768px) {
                .hero-content {
                    grid-template-columns: 1fr !important;
                    text-align: center;
                    gap: 3rem !important;
                }
                
                .hero-text {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .social-links {
                    justify-content: center;
                }

                .terminal-card {
                    margin: 0 -1rem; /* Full width on very small screens */
                }

                /* Override specific grid layout for mobile inside terminal */
                .terminal-content {
                    grid-template-columns: 1fr !important;
                    gap: 1rem !important;
                    text-align: left;
                }
            }
        `}
            </style>
        </section>
    );
};

export default Hero;
