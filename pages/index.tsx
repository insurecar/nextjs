import { Htag, Tag, Button, P, Rating } from "../components";
import { useState, useEffect } from "react";
import { Layout, withLayout } from "../layout/Layout";

function Home(): JSX.Element {
  const [counter, setCounter] = useState<number>(0);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((counter) => ++counter)}
      >
        Press me
      </Button>
      <Button appearance="ghost" arrow="down">
        Press me
      </Button>
      <P size="s">sa</P>
      <P size="m">sa</P>
      <P size="l">sa</P>
      <Tag color="green">sdfsdf</Tag>
      <Tag size="m" color="primary" href="#">
        sdfsdf
      </Tag>
      <Tag size="s" color="ghost" href="#">
        sdfsdf
      </Tag>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
