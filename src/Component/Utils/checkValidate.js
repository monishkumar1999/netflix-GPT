
export const checkValidate = (email, password) => {
    
    const checkemail = /^[a-zA-Z]+@gmail\.com$/.test(email);
  const checkpass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/.test(password);


  if (!checkemail) return "Email id is not valid";
  if (!checkpass) return "Password id is not valid";

  return null
};
