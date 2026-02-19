import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';
import { resumeData } from '../data/resume';

const Projects = () => {
    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Academic Projects</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {resumeData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--bg-card)',
                                padding: '2rem',
                                borderRadius: '1rem',
                                border: '1px solid rgba(0, 243, 255, 0.1)',
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                transition: 'transform 0.2s',
                            }}
                            whileHover={{ y: -5 }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1.5rem' }}>
                                <Folder size={40} color="var(--accent-primary)" />
                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    {project.link !== '#' && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)' }}>
                                            <Github size={20} />
                                        </a>
                                    )}
                                    {/* <ExternalLink size={20} /> */}
                                </div>
                            </div>

                            <h3 style={{ marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>

                            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', flex: 1, fontSize: '0.9rem' }}>
                                {project.description}
                            </p>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {project.tech.map((tech) => (
                                    <span key={tech} style={{
                                        fontSize: '0.8rem',
                                        fontFamily: 'var(--font-mono)',
                                        color: 'var(--text-secondary)'
                                    }}>
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
