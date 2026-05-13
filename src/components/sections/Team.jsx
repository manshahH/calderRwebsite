import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const team = [
  {
    id: 1,
    name: 'Aaina Batool',
    role: 'Co-founder & Client Strategy Lead',
    photo: '/team/aaina.jpeg',
    hasPhoto: true,
    initials: 'AB',
    bio: 'Helping businesses turn complex processes into scalable AI-driven systems by leading the development of intelligent automation solutions.',
    tags: ['ROI Analysis', 'Discovery', 'Client Strategy', 'Ops'],
    linkedin: 'https://www.linkedin.com/in/aainabatool/'
  },
  {
    id: 2,
    name: 'Hamdan Sethi',
    role: 'Co-founder & System Architect',
    photo: '/team/hamdan.jpeg',
    hasPhoto: true,
    initials: 'HS',
    bio: 'Builds the workflows that eliminate manual work. Connects your tools into systems that run themselves.',
    tags: ['Make.com', 'API Design', 'Process Mapping'],
    linkedin: 'https://www.linkedin.com/in/hamdansethi'
  },
  {
    id: 3,
    name: 'Hussain Raza',
    role: 'AI Engineer',
    photo: '/team/hussain.png',
    hasPhoto: true,
    initials: 'HT',
    bio: 'Specializes in connecting AI systems to existing business stacks. Zero disruption, maximum impact.',
    tags: ['CRM Integration', 'Data Pipelines', 'Deployment', 'QA'],
    linkedin: 'https://www.linkedin.com/in/hussain-razaturi/'
  },
  {
    id: 4,
    name: 'Manshah H. Bangash',
    role: 'AI Architect',
    photo: '/team/manshah.png',
    hasPhoto: true,
    initials: 'MB',
    bio: 'Designs the intelligence layer and translates business problems into AI systems that ship and scale.',
    tags: ['LLM Integration', 'Agent Workflows'],
    linkedin: 'https://www.linkedin.com/in/manshah-hussain'
  }
]

function TeamCard({ member }) {
  const [flipped, setFlipped] = useState(false)
  const [showBack, setShowBack] = useState(false)

  return (
    <div
      onMouseEnter={() => {
        setFlipped(true)
        setTimeout(() => setShowBack(true), 400)
      }}
      onMouseLeave={() => {
        setShowBack(false)
        setTimeout(() => setFlipped(false), 100)
      }}
      onClick={() => setFlipped(prev => !prev)}
      style={{
        width: '100%',
        aspectRatio: '3/4',
        perspective: '1000px',
        cursor: 'none',
      }}
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
          transition: 'transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1.000)',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        
        {/* FRONT */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          {member.hasPhoto ? (
            <img
              src={member.photo}
              alt={member.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center top',
                display: 'block',
                filter: 'saturate(0.85) contrast(1.05)',
              }}
            />
          ) : (
            <div style={{
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, #1a2744 0%, #0C1220 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              <span style={{
                fontFamily: 'Roboto Condensed, sans-serif',
                fontWeight: 800,
                fontSize: '80px',
                color: 'rgba(59,175,212,0.18)',
                userSelect: 'none',
              }}>
                {member.initials}
              </span>
            </div>
          )}

          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 45%, rgba(6,10,20,0.95) 100%)',
          }} />

          <div style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            borderRadius: '100px',
            padding: '5px 12px',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.5px',
            userSelect: 'none',
          }}>
            Hover to meet me
          </div>

          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '20px 24px',
          }}>
            <div style={{
              fontFamily: 'Roboto Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '22px',
              color: '#E2E8F2',
              marginBottom: '4px',
            }}>
              {member.name}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#3BAFD4',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
            }}>
              {member.role}
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(59,175,212,0.2)',
            background: '#0C1220',
            padding: '28px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          <div>
            <div style={{
              fontFamily: 'Roboto Condensed, sans-serif',
              fontWeight: 800,
              fontSize: '24px',
              color: '#E2E8F2',
              marginBottom: '4px',
              opacity: showBack ? 1 : 0,
              transform: showBack ? 'rotateX(0deg)' : 'rotateX(90deg)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              transitionDelay: showBack ? '0s' : '0s',
            }}>
              {member.name}
            </div>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: '#3BAFD4',
              textTransform: 'uppercase',
              letterSpacing: '1.5px',
              marginBottom: '14px',
              opacity: showBack ? 1 : 0,
              transform: showBack ? 'rotateX(0deg)' : 'rotateX(90deg)',
              transition: 'opacity 0.3s ease, transform 0.3s ease',
              transitionDelay: showBack ? '0.05s' : '0s',
            }}>
              {member.role}
            </div>
            <p style={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 300,
              fontSize: '13px',
              color: '#6B7A99',
              lineHeight: 1.7,
              marginBottom: '18px',
              opacity: showBack ? 1 : 0,
              transform: showBack ? 'rotateX(0deg)' : 'rotateX(90deg)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              transitionDelay: showBack ? '0.1s' : '0s',
            }}>
              {member.bio}
            </p>
            <div style={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: '#3D4A60',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              marginBottom: '10px',
              opacity: showBack ? 1 : 0,
              transform: showBack ? 'rotateX(0deg)' : 'rotateX(90deg)',
              transition: 'opacity 0.35s ease, transform 0.35s ease',
              transitionDelay: showBack ? '0.15s' : '0s',
            }}>
              Expertise
            </div>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
              opacity: showBack ? 1 : 0,
              transform: showBack ? 'rotateX(0deg)' : 'rotateX(90deg)',
              transition: 'opacity 0.4s ease, transform 0.4s ease',
              transitionDelay: showBack ? '0.2s' : '0s',
            }}>
              {member.tags.map(tag => (
                <span key={tag} style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#3BAFD4',
                  background: 'rgba(59,175,212,0.08)',
                  border: '1px solid rgba(59,175,212,0.18)',
                  borderRadius: '5px',
                  padding: '4px 10px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div style={{
              height: '1px',
              background: 'rgba(255,255,255,0.06)',
              marginBottom: '14px',
              opacity: showBack ? 1 : 0,
              transition: 'opacity 0.3s ease',
              transitionDelay: showBack ? '0.25s' : '0s',
            }} />
            
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '11px',
                color: '#6B7A99',
                textDecoration: 'none',
                transition: 'color 0.2s, opacity 0.3s ease, transform 0.3s ease',
                opacity: showBack ? 1 : 0,
                transform: showBack ? 'rotateX(0deg)' : 'rotateX(90deg)',
                transitionDelay: showBack ? '0.28s' : '0s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#3BAFD4'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7A99'}
            >
              <ExternalLink size={13} />
              LinkedIn Profile
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default function Team() {
  return (
    <section style={{ background: '#060A14', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 32px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 64px' }}>
          <span style={{
            display: 'inline-block',
            background: 'rgba(59,175,212,0.08)',
            border: '1px solid rgba(59,175,212,0.2)',
            color: '#3BAFD4',
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '1.5px',
            padding: '6px 16px',
            borderRadius: '100px',
            marginBottom: '20px',
          }}>
            The Team
          </span>
          <h2 style={{
            fontFamily: 'Roboto Condensed, sans-serif',
            fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 52px)',
            color: '#E2E8F2',
            letterSpacing: '-1px',
            marginBottom: '16px',
            lineHeight: 1.1,
          }}>
            People Behind the Intelligence.
          </h2>
          <p style={{
            fontFamily: 'Roboto, sans-serif',
            fontWeight: 300,
            fontSize: '17px',
            color: '#6B7A99',
            lineHeight: 1.7,
          }}>
            We are builders, strategists, and problem solvers. We care about your
            business outcomes more than the technology.
          </p>
        </div>

        {/* Cards grid */}
        <div className="team-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
        }}>
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <TeamCard member={member} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
