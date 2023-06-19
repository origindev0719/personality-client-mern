import axios from "axios";

const api = `https://personality-backend-1.onrender.com/api`;

const Login = async (user: any): Promise<any> => {
  const response = await axios.post(`${api}/login`, user);
  const users = await response;
  if (users.data.error) {
    return "error";
  }
  const { email, username } = users.data;
  localStorage.setItem(
    "user",
    JSON.stringify({
      username: username,
      email: email,
    })
  );
  return users.data.username;
};

const SignUp = async (user: any): Promise<any> => {
  const response = await axios.post(`${api}/signup`, user);
  const users = await response;
  return users;
};

export { Login, SignUp };
