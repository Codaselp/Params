import {useState} from "react";
import { Data } from "../types/types";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState<Data[]>([
    {
      id: 1,
      name: "Something",
      description: "Some random text"
    },
    {
      id: 2,
      name: "Learn React",
      description: "Some random text 1"
    },
    {
      id: 3,
      name: "Typescript Tutorial",
      description: "Some random text 2"
    },
    {
      id: 4,
      name: "Laravel Tutorial",
      description: "Some random text 2"
    },
    {
      id: 5,
      name: "PHP Tutorial",
      description: "Some random text 2"
    },
  ])
  
  return (
    <main>
      {
        data.map(item => {
          return (
            <Link to={`/${item.name.split(" ")[0].toLowerCase()}`} key={item.id}>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </Link>
          )
        })
      }
    </main>
  )
}

export default Home;