export const checkValidData = (email, password) => {
 const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
 const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
//  const isName = /^[A-Z][a-z]+(?: [A-Z][a-z]+)*$/.test(name);
 
 if(!isEmailValid) return "Invalid Email";
 if(!isPasswordValid) return "Invalid Password";
//  if(!isName) return "Invalid Name";
 return null;
}