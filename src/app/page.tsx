import { Header } from "./component/header";
import { Main } from "./component/main";
import { MyButtonindex } from "./component/mybutton/Index";


export default function Home() {

  return (
    <div>
      <MyButtonindex />
      <Header />
      <Main
        name="Normal"
        obj={{ name: "モカ", age: 6, color: "茶" }}
      />
    </div>

  );
}
