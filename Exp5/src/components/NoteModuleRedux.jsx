import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function NoteModuleRedux({ title }) {
    const [note, setNote] = useState("");
    const notes = useSelector(state => state.notes.items);
    const dispatch = useDispatch();

    const addNote = () => {
        dispatch({ type: "ADD_NOTE", payload: note });
        setNote("");
    };

    return (
        <section style={{
            background: "rgba(249, 236, 255, 0.92)",
            borderRadius: "18px",
            padding: "24px",
            boxShadow: "0 16px 40px rgba(88, 28, 135, 0.2)",
            border: "1px solid rgba(139, 92, 246, 0.15)",
            color: "#4c1d95"
        }}>
            <h2 style={{
                margin: "0 0 18px",
                fontSize: "1.4rem",
                color: "#6d28d9"
            }}>
                {title}
            </h2>

            <div style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                justifyContent: "center",
                marginBottom: "18px"
            }}>
                <input
                    type="text"
                    placeholder="Enter note..."
                    value={note}
                    onChange={(event) => setNote(event.target.value)}
                    style={{
                        flex: "1 1 180px",
                        padding: "10px 12px",
                        borderRadius: "8px",
                        border: "1px solid rgba(109, 40, 217, 0.25)",
                        fontSize: "0.95rem"
                    }}
                />
                <button
                    type="button"
                    onClick={addNote}
                    style={{
                        padding: "10px 18px",
                        borderRadius: "8px",
                        background: "#6d28d9",
                        color: "white",
                        border: "none",
                        fontWeight: 700,
                        letterSpacing: "0.02em"
                    }}
                >
                    ADD NOTE
                </button>
            </div>

            {notes.length === 0 ? (
                <p style={{ margin: 0, fontStyle: "italic" }}>No notes added yet.</p>
            ) : (
                <ul style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px"
                }}>
                    {notes.map((item, index) => (
                        <li
                            key={`${item}-${index}`}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "space-between",
                                gap: "12px",
                                background: "rgba(255, 255, 255, 0.85)",
                                borderRadius: "10px",
                                padding: "10px 12px",
                                boxShadow: "0 8px 18px rgba(88, 28, 135, 0.12)"
                            }}
                        >
                            <span>{item}</span>
                            <button
                                type="button"
                                onClick={() => dispatch({ type: "REMOVE_NOTE", payload: index })}
                                style={{
                                    background: "transparent",
                                    border: "1px solid rgba(109, 40, 217, 0.3)",
                                    color: "#6d28d9",
                                    borderRadius: "999px",
                                    padding: "6px 10px",
                                    fontSize: "0.75rem",
                                    cursor: "pointer"
                                }}
                            >
                                REMOVE
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
