// export const Index = (props) => {
//   return <></>;
// };
// export default Index;

type IProps = {
  n: string;
  a?: number;
};

export type IType = {
  num: number;
} & IProps;

export default function Index(props: IProps) {
  return <>{props.n}</>;
}
