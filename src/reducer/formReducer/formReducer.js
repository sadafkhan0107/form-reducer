export  const formReducer=(state, {type,payload})=>{
    switch (type) {
        case "name":
          return { ...state, name: payload };
        case "email":
          return { ...state, email: payload };
        case "password":
          return { ...state, password: payload };
        case "number":
          return { ...state, number: payload };
        default:
          return state;
      }
}