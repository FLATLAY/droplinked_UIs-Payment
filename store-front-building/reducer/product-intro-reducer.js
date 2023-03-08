export function productIntroReducer(state, action) {
    switch (action.type) {
      case "updateTitle":
        return { ...state, title: action.payload };
      case "updateDescription":
        return { ...state, description: action.payload };
      case "updateMedia":
        return { ...state, media: action.payload };
      default:
        throw new Error();
    }
  }
  