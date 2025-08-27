import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";



class About extends Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  componentDidMount() {
    console.log("parent mount");
  }
  render() {
    console.log(" Parent render");
    return (
      <div className="m-10  flex">
        <UserClass name={"khushi gupta"} location={"noida"} />
      </div>
    );
  }
}

export default About;
