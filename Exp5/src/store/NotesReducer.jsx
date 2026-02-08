export const notesInitialState = {
    items: []
};

export function NotesReducer(state = notesInitialState, action) {
    switch (action.type) {
        case "ADD_NOTE": {
            const trimmed = action.payload?.trim?.() ?? "";
            if (!trimmed) {
                return state;
            }
            return {
                ...state,
                items: [...state.items, trimmed]
            };
        }
        case "REMOVE_NOTE": {
            const index = action.payload;
            if (typeof index !== "number" || index < 0 || index >= state.items.length) {
                return state;
            }
            return {
                ...state,
                items: state.items.filter((_, idx) => idx !== index)
            };
        }
        default:
            return state;
    }
}
