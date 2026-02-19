import React from 'react';
import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Skills = () => {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    const categories = Object.keys(resumeData.skills);

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Technical Skills</h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                    {categories.map((category) => (
                        <motion.div
                            key={category}
                            variants={item}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            style={{
                                background: 'rgba(3, 0, 20, 0.4)',
                                padding: '1.5rem',
                                borderRadius: '0.75rem',
                                border: '1px solid rgba(0, 243, 255, 0.1)',
                                backdropFilter: 'blur(10px)'
                            }}
                        >
                            <h3 style={{ textTransform: 'capitalize', color: 'var(--accent-primary)', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                                {category === 'devops' ? 'DevOps & Cloud' : category}
                            </h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                {resumeData.skills[category].map((skill) => (
                                    <span key={skill} style={{
                                        fontSize: '0.85rem',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '1rem',
                                        background: 'rgba(189, 0, 255, 0.15)',
                                        color: 'var(--accent-primary)',
                                        fontFamily: 'var(--font-mono)'
                                    }}>
                                        {skill}
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

export default Skills;
