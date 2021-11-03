import { Htag } from "../components";
import { Button } from "../components";
import { P } from "../components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Текст</Htag>
      <Button appearance="primary" arrow="right">
        Press me
      </Button>
      <Button appearance="ghost" arrow="down">
        Press me
      </Button>
      <P size="s">sa</P>
      <P size="m">sa</P>
      <P size="l">sa</P>
    </div>
  );
}
