import React, { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import './ZegoCloud.css'

const participants = [
  { name: 'Aarav', initials: 'AS', tone: 'a', speaking: true },
  { name: 'Meera', initials: 'MK', tone: 'b' },
  { name: 'Rohan', initials: 'RV', tone: 'c' },
  { name: 'You', initials: 'YO', tone: 'd' },
]

const features = [
  {
    title: 'Join with a room ID',
    text: 'No accounts, no installs. Type an ID, press Join, and you are in the call.',
  },
  {
    title: 'Share the ID, not a link',
    text: 'Anyone who enters the same ID lands in the same room, so inviting people is a copy and paste.',
  },
  {
    title: 'Video and audio in the browser',
    text: 'Calls run on ZEGOCLOUD, so camera, microphone and screen sharing work on desktop and mobile.',
  },
  {
    title: 'Rooms open on demand',
    text: 'A room exists as soon as the first person joins it and closes when the last one leaves.',
  },
]

const randomRoomId = () => Math.random().toString(36).slice(2, 8)

const ZegoCLoud = () => {
  const [value, setValue] = useState('')
  const navigate = useNavigate()

  const joinRoom = useCallback(() => {
    const id = value.trim()
    if (!id) return
    navigate(`/room/${id}`)
  }, [navigate, value])

  const handleSubmit = (e) => {
    e.preventDefault()
    joinRoom()
  }

  return (
    <div className="zc">
      <header className="zc-nav">
        <span className="zc-logo">
          <span className="zc-logo-dot" />
          Huddle
        </span>
        <span className="zc-nav-note">Built with React and ZEGOCLOUD</span>
      </header>

      <main className="zc-hero">
        <section className="zc-copy">
          <h1>Video calls that start with a room ID.</h1>
          <p className="zc-lead">
            Pick an ID, share it with whoever you want to talk to, and join. That is the whole setup.
          </p>

          <form className="zc-form" onSubmit={handleSubmit}>
            <input
              id="room"
              type="text"
              value={value}
              placeholder="Enter room ID"
              autoComplete="off"
              onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" disabled={!value.trim()}>
              Join room
            </button>
          </form>

          <p className="zc-hint">
            Starting a new call?{' '}
            <button type="button" className="zc-link" onClick={() => setValue(randomRoomId())}>
              Generate a room ID
            </button>
          </p>
        </section>

        <section className="zc-preview" aria-hidden="true">
          <div className="zc-window">
            <div className="zc-window-bar">
              <span className="zc-live" />
              <span className="zc-room-name">room / design-sync</span>
              <span className="zc-count">4 in call</span>
            </div>

            <div className="zc-grid">
              {participants.map((p) => (
                <div
                  key={p.name}
                  className={`zc-tile tone-${p.tone}${p.speaking ? ' speaking' : ''}`}
                >
                  <span className="zc-avatar">{p.initials}</span>
                  <span className="zc-name">{p.name}</span>
                </div>
              ))}
            </div>

            <div className="zc-controls">
              <span className="zc-ctrl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="9" y="3" width="6" height="11" rx="3" />
                  <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
                </svg>
              </span>
              <span className="zc-ctrl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="6" width="13" height="12" rx="2.5" />
                  <path d="M16 10.5l5-3v9l-5-3" />
                </svg>
              </span>
              <span className="zc-ctrl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="12" rx="2" />
                  <path d="M8 20h8M12 16v4" />
                </svg>
              </span>
              <span className="zc-ctrl end">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 15c4.5-4 11.5-4 16 0l-2 2.5-3-1.5v-2c-2-.7-4-.7-6 0v2l-3 1.5z" />
                </svg>
              </span>
            </div>
          </div>
        </section>
      </main>

      <section className="zc-features">
        <h2>How it works</h2>
        <dl>
          {features.map((f) => (
            <div className="zc-feature" key={f.title}>
              <dt>{f.title}</dt>
              <dd>{f.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <footer className="zc-footer">
        <span>Huddle is a demo project.</span>
        <span>React, React Router, ZEGOCLOUD UIKit</span>
      </footer>
    </div>
  )
}

export default ZegoCLoud