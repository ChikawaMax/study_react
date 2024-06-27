import { Header } from "../component/header";
import { Main } from "../component/main";
import { MyButtonabout } from "../component/mybutton/about";

export default function Home() {
  return (
    <div>
      <MyButtonabout />
      <Header />
      <Main
        name="About"
        obj={{ name: "タマ", age: 6, color: "三毛" }}
      />
    </div>


  );
}