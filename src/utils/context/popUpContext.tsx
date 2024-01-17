import {createContext, ReactNode, useContext, useState} from "react";

interface IPopUpContext {
    isOpen: boolean;
    popUp: ReactNode;
    definePopUp: Function;
    resetPopUp: Function;
    openPopUp: Function;
    closePopUp: Function;
}

const PopUpContext = createContext({} as IPopUpContext);

const consumePopUpContext = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [popUp, setPopUp] = useState({} as ReactNode)

    const definePopUp = (children: ReactNode) => {
        setPopUp(children)
    }

    const resetPopUp = () => {
        setPopUp({} as ReactNode)
        setIsOpen(false)
    }

    const openPopUp = () => {
        setIsOpen(true)
    }

    const closePopUp = () => {
        resetPopUp()
    }

    return {
        isOpen,
        popUp,
        definePopUp,
        resetPopUp,
        openPopUp,
        closePopUp
    }
}

export const usePopUpContext = () => {
    return useContext(PopUpContext)
}

interface IProviderProps {
    children: ReactNode
}

const ProvidePopUpContext = ({children}: IProviderProps) => {

    const context = consumePopUpContext()

    return <PopUpContext.Provider value={context}>
        {children}
    </PopUpContext.Provider>
}

export default ProvidePopUpContext;