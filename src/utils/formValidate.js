export const Validate = (email,password) => {
    const emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!emailCheck) return "Please check your email Id!";
    if(!passwordCheck) return "Please check your Password!";
    return null;
}