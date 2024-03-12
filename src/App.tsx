import {FC} from "react";
import FilterSelect from "./components/FilterSelect";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";
import {WrapperApp} from "./styles/StylesApp";
import Header from "./components/Header";

const App: FC = () => {
    return (
        <WrapperApp>
            <Header/>
            <InputForm/>
            <FilterSelect/>
            <TodoList/>
        </WrapperApp>
    )
}

export default App;
