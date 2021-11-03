import { Htag } from "../components";
import { Button } from "../components";

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
    </div>
  );
}
