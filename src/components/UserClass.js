// class based component
import React from "react";
import { FaLinkedin, FaTelegramPlane, FaInstagram } from "react-icons/fa";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      userInfo: {
        name: "",
        location: "Default",
      },
    };
    //  console.log(this.props.name +"child constructor")
  }
  async componentDidMount() {
    // console.log(this.props.name +"child mount")
    // Api calls
    const username = "khushi-gupta-tech";

    const data = await fetch(`https://api.github.com/users/${username}`, {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);

    this.timer = setInterval(() => {
      console.log("timer");
    }, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.count !== prevState.count) {
      // code
    }
    if (this.state.count2 !== prevState.count2) {
      // code
    }
    console.log("update");
  }
  componentWillUnmount() {
    console.log("will unmount"); // when we leaving the page it called
    clearInterval(this.timer);
  }
  render() {
    // console.log(this.props.name + "child render")
    const { name, login, avatar_url } = this.state.userInfo;
    // debugger;
    return (
      <div className="w-200 h-100 mx-auto mt-30 mr-100 border-gray-600 p-6 bg-white rounded-2xl shadow-xl flex flex-col  ">
        <img
          className="h-50 w-50 rounded-full object-cover border-4 border-gray-100 shadow-md mb-4"
          src={avatar_url}
          alt={name}
        />
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <h3 className="text-gray-500 font-semibold mt-1">Frontend Developer</h3>
        <p className="text-gray-800 text-sm mt-3 leading-relaxed px-2">
          Driven by curiosity and innovation, I specialize in building scalable,
          responsive, and visually engaging applications that bring concepts to
          life through modern frontend technologies
        </p>
        <div className="flex">
          <a
            href="https://www.linkedin.com/in/khushi-gupta-437656235/" // 🔹 replace with your LinkedIn profile
            target="_blank"
            className="mt-2 hover:text-blue-800 transition-colors"
          >
            <FaLinkedin size={25} />
          </a>
          <a
            href="https://t.me/yourusername" // 🔹 replace with your Telegram link
            target="_blank"
            className=" mt-2 ml-2 hover:text-sky-700 transition-colors"
          >
            <FaTelegramPlane size={25} />
          </a>
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            className="mt-2 ml-2 hover:text-pink-700 transition-colors"
          >
            <FaInstagram size={25} />
          </a>
        </div>
      </div>
    );
  }
}
export default UserClass;

/**
 constructor (dummy)
 render (dummy)
      <html> (dummy)
componentdidMount (APi)  / setstate

-- update 
  render(api)
  <html> (api data)
  componentDidUpdate

 */
