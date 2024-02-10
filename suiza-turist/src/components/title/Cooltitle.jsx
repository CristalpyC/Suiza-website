import { Extra } from "../extra-info/Extra";
import "./title.scss";

export const CoolTitle = () => {
  return (
    <div className="title__container">
        <h1>Fascinating Facts <br /> <span>You {`Didn't`} Know</span></h1>
        <div className="curve">
            <section><Extra /></section>
        </div>
        {/*<section><Extra /></section>*/}
    </div>
  )
}
