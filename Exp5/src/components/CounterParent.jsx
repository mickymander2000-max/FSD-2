import { useContext } from "react";
import { CounterContext } from "./CounterContextApi";

function ParentCounter() {
    const { count, setCount } = useContext(CounterContext);

    return (
        <div style={{
            background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(34, 197, 94, 0.2)',
            padding: "32px",
            margin: "16px auto",
            borderRadius: "20px",
            textAlign: "center",
            boxShadow: '0 8px 32px rgba(34, 197, 94, 0.1)',
            maxWidth: '400px',
            transition: 'all 0.3s ease'
        }}>
            <h3 style={{
                fontSize: '1.5em',
                marginBottom: '24px',
                background: 'linear-gradient(135deg, #22c55e 0%, #84cc16 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: '700',
                letterSpacing: '-0.02em'
            }}>
                Global State (ContextAPI): <span style={{ fontSize: '2.5em' }}>{count}</span>
            </h3>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => setCount(count + 1)} style={{
                    margin: "8px",
                    padding: "12px 28px",
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(132, 204, 22, 0.2) 100%)',
                    color: "#86efac",
                    border: "2px solid #22c55e",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: '600',
                    fontSize: '1em',
                    boxShadow: '0 8px 24px rgba(34, 197, 94, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateZ(0)'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px)';
                        e.target.style.boxShadow = '0 12px 32px rgba(34, 197, 94, 0.4)';
                        e.target.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(132, 204, 22, 0.3) 100%)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.2)';
                        e.target.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(132, 204, 22, 0.2) 100%)';
                    }}>
                    ➕ INCREASE
                </button>

                <button onClick={() => setCount(count - 1)} style={{
                    margin: "8px",
                    padding: "12px 28px",
                    background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(132, 204, 22, 0.2) 100%)',
                    color: "#86efac",
                    border: "2px solid #22c55e",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: '600',
                    fontSize: '1em',
                    boxShadow: '0 8px 24px rgba(34, 197, 94, 0.2)',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: 'translateZ(0)'
                }}
                    onMouseEnter={(e) => {
                        e.target.style.transform = 'translateY(-4px)';
                        e.target.style.boxShadow = '0 12px 32px rgba(34, 197, 94, 0.4)';
                        e.target.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.3) 0%, rgba(132, 204, 22, 0.3) 100%)';
                    }}
                    onMouseLeave={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 8px 24px rgba(34, 197, 94, 0.2)';
                        e.target.style.background = 'linear-gradient(135deg, rgba(34, 197, 94, 0.2) 0%, rgba(132, 204, 22, 0.2) 100%)';
                    }}>
                    ➖ DECREASE
                </button>
            </div>
        </div>
    );
}

export default ParentCounter;
