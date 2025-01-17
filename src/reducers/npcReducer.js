const initialState = {
  npcs: [],
  time: 400,
  hp: 5,
  strength: 1,
  npcCardStyle: "combat-card-container",
};

const npcControllerReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_NPC':
      return {
        ...state,
        npcs: [...state.npcs, action.payload.npc]
      };
    case 'SET_NPC_TIME':
      return { ...state, time: action.payload.time };
    case 'SET_NPC_HP':
      return { ...state, hp: action.payload.hp };
    case 'SET_NPC_STR':
      return { ...state, strength: action.payload.str };
    case 'REMOVE_NPC':
      return {
        ...state,
        npcs: state.npcs.filter(npc => npc.id !== action.payload.id)
      };
    case 'REMOVE_ALL_NPCS':
      return {
        ...state,
        npcs: []
      };

    case 'GET_DMG_NPC':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id ? { ...npc, hp: npc.hp - action.payload.dmg } : npc
        )
      };
    case 'SET_NPC_CARD_STYLE':
      return {
        ...state,
        npcCardStyle: action.payload.style
      };
    case 'SET_NPC_STYLE':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id ? { ...npc, npcStyle: action.payload.style } : npc
        )
      };
    case 'SET_NPC_X':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id ? { ...npc, npcX: action.payload.x } : npc
        )
      };
    case 'SET_NPC_Y':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id ? { ...npc, npcY: action.payload.y } : npc
        )
      };
    case 'npcINCREASEX':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id && npc.npcX < 8 ? { ...npc, npcX: npc.npcX + 1 } : npc
        )
      };
    case 'npcDECREASEX':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id && npc.npcX > 1 ? { ...npc, npcX: npc.npcX - 1 } : npc
        )
      };
    case 'npcINCREASEY':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id && npc.npcY < 8 ? { ...npc, npcY: npc.npcY + 1 } : npc
        )
      };
    case 'npcDECREASEY':
      return {
        ...state,
        npcs: state.npcs.map(npc =>
          npc.id === action.payload.id && npc.npcY > 1 ? { ...npc, npcY: npc.npcY - 1 } : npc
        )
      };
    default:
      return state;
  }
};

export default npcControllerReducer;