import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import db from "./firebase";
import { useHistory } from "react-router-dom";
export default function Create() {
  const history = useHistory();
  const [backgroundImg, setBackgroundImg] = useState("");
  const [cardImg, setcardImg] = useState("");
  const [description, setdescription] = useState("");
  const [subTitle, setsubTitle] = useState("");
  const [title, settitle] = useState("");
  const [titleImg, settitleImg] = useState("");
  const [type, settype] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (
      !backgroundImg ||
      !cardImg ||
      !description ||
      !subTitle ||
      !title ||
      !titleImg ||
      !type
    ) {
      alert("Input Field cannot be empty");
      return;
    }
    console.log(
      backgroundImg,
      cardImg,
      description,
      subTitle,
      title,
      titleImg,
      type
    );

    db.collection("movies").add({
      backgroundImg: backgroundImg,
      cardImg: cardImg,
      description: description,
      subTitle: subTitle,
      title: title,
      titleImg: titleImg,
      type: type
    });

    history.push("/home");
  }

  return (
    <CreateContainer>
      <FormContainer>
        <h1>
          <AddIcon /> Add a new Movie
        </h1>
        <form>
          <label htmlFor="">Background Image URL</label>
          <input
            required
            type="text"
            value={backgroundImg}
            onChange={(e) => {
              setBackgroundImg(e.target.value);
            }}
            placeholder="BACKGROUND IMAGE"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">Card Image URL</label>
          <input
            required
            type="text"
            value={cardImg}
            onChange={(e) => {
              setcardImg(e.target.value);
            }}
            placeholder="CARD IMAGE"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">Description</label>
          <input
            required
            type="text"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
            placeholder="DESCRIPTION"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">Sub Title</label>
          <input
            required
            type="text"
            value={subTitle}
            onChange={(e) => {
              setsubTitle(e.target.value);
            }}
            placeholder="SUBTITLE"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">Title</label>
          <input
            required
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            placeholder="TITLE"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">Title Image URL</label>
          <input
            required
            type="text"
            value={titleImg}
            onChange={(e) => {
              settitleImg(e.target.value);
            }}
            placeholder="TITLE IMAGE URL"
            name=""
            id=""
          />
          <br />
          <label htmlFor="">Type</label>
          <select
            required
            name=""
            id=""
            value={type}
            onChange={(e) => settype(e.target.value)}
          >
            <option value="recommend">Recommend</option>
            <option value="new">New</option>
            <option value="trending">Trending</option>
            <option value="original">Original</option>
          </select>
          <button type="submit" onClick={handleAdd}>
            Enter
          </button>
        </form>
      </FormContainer>
    </CreateContainer>
  );
}

const CreateContainer = styled.div`
  margin: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-radius: 5px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px, -2px -3px 20px rgb(0 0 0 / 73%);

  > h1 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 500;
  }
  > form {
    > label {
      display: block;
      margin: 10px 0;
      margin-left: 20px;
      font-family: sans-serif;
    }

    > input {
      margin: 20px;
      margin-top: 0;
      width: 90%;
      padding: 10px 15px;
      outline: none;
    }
    > select {
      margin: 20px;
      margin-top: 0;
      width: 90%;
      padding: 10px 15px;
      outline: none;

      > option {
        font-size: 0.9rem;
        font-family: sans-serif;
      }
    }

    > button {
      background: #0063e5;
      padding: 10px 15px;
      width: 80%;
      border: none;
      margin: 30px 0;
      margin-left: 10%;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      font-size: 1.1rem;
      color: #fff;
      font-weight: 500;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

const Label = styled.label``;
