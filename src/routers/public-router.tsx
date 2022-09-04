import {Route, Routes} from "react-router-dom";
import {Home} from "../containers/home/home";

type Props = {

};
export const PublicRouter = (props: Props) => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    );
};
