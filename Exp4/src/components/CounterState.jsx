import { useState } from "react";

export default function LocalCounter() {
    const [count, setCount] = useState(0);

    // Event handler functions for click Event
    const increaseCount = () => setCount(count + 1);
    const decreaseCount = () => setCount(count - 1);

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(96, 165, 250, 0.2)',
            padding: "32px",
            margin: "16px auto",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: '0 8px 32px rgba(59, 130, 246, 0.1)',
            maxWidth: '400px',
            transition: 'all 0.3s ease'
        }}>

            <h3 style={{
                fontSize: '1.5em',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                letterSpacing: '-0.02em'
            }}>
                Local State Counter: <span style={{ fontSize: '2.5em' }}>{count}</span>
            </h3>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={increaseCount} style={{
                    margin: "8px",
                    padding: "12px 28px",
                    background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                    color: "white",
                    border: "none",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: '600',
                    fontSize: '1em',
                    boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateZ(0)'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px)';
                        e.target.style.boxShadow = '0 12px 32px rgba(59, 130, 246, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 24px rgba(59, 130, 246, 0.4)';
                    }}>
                    ➕ INCREASE
                </button>

                <button onClick={decreaseCount} style={{
                    margin: "8px",
                    padding: "12px 28px",
                    background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)',
                    color: "#fca5a5",
                    border: "2px solid #ef4444",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: '600',
                    fontSize: '1em',
                    boxShadow: '0 8px 24px rgba(239, 68, 68, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateZ(0)'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px)';
                        e.target.style.boxShadow = '0 12px 32px rgba(239, 68, 68, 0.4)';
                        e.target.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.3) 0%, rgba(220, 38, 38, 0.3) 100%)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 24px rgba(239, 68, 68, 0.2)';
                        e.target.style.background = 'linear-gradient(135deg, rgba(239, 68, 68, 0.2) 0%, rgba(220, 38, 38, 0.2) 100%)';
                    }}>
                    ➖ DECREASE
                </button>
            </div>

        </div>
    );
}
