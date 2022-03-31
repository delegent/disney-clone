import styled from "styled-components";
import Viewers from "./Viewers";
import NewDisney from "./NewDisney";
import ImgSlider from "./ImgSlider";
import Recommends from "./Recommends";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import db from "./firebase";
import { setMovies } from "../features/movie/movieSlice";
import { selectUserName } from "../features/user/userSlice";
// import { Unsubscribe } from "@mui/icons-material";
let recommends = [];
let newDisneys = [];
let originals = [];
let trending = [];

export default function Home(props) {
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);

  useEffect(() => {
    return () => {
      recommends = [];
      newDisneys = [];
      originals = [];
      trending = [];
    };
  }, []);

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;

          default:
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending
        })
      );
    });

    return () => {
      recommends = [];
      newDisneys = [];
      originals = [];
      trending = [];
    };
  }, [username]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
}

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
