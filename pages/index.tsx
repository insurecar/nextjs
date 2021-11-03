import { Htag, Tag, Button, P } from "../components";

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
      <Tag color="green">sdfsdf</Tag>
      <Tag size="m" color="primary" href="#">
        sdfsdf
      </Tag>
      <Tag size="s" color="ghost" href="#">
        sdfsdf
      </Tag>
    </div>
  );
}
