import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectCategoryById} from "../../../../store/Selector";
import {usePopUpContext} from "../../../../utils/context/popUpContext.tsx";
import CategoryUpdatePopUp from "../index.tsx";
import './suppressPopUp.scss';
import {deleteCategory} from "../../../../store/Slice/categorySlice.ts";


interface ISuppressPopUpProps {
    id: number;
}

const SuppressPopUp: React.FC<ISuppressPopUpProps> = ({id}: ISuppressPopUpProps) => {

    const category = useSelector(selectCategoryById(id))
    const {
        definePopUp,
        resetPopUp
    } = usePopUpContext()

    const dispatch = useDispatch()

    const onAbort = () => {
        definePopUp(<CategoryUpdatePopUp id={id}/>)
    }

    const onValidate = () => {
        dispatch(deleteCategory(category))
        resetPopUp()
    }

    return (
        <div className={'deleteCat'}>
            <h3 className={'title'}>Attention !</h3>
            {
                category &&
                <div className={'content'}>
                    En appuyant sur <strong>supprimer</strong> vous supprimerez la catégorie <strong>{category.name}</strong><br/>
                    Toutes les dépenses liée à cette catégorie seront liée à la catégorie <strong>Autres</strong>
                    <div className={'buttonGroup'}>
                        <button className={'abort'} onClick={onAbort}>Annuler</button>
                        <button className={'validate'} onClick={onValidate}>Supprimer</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default SuppressPopUp;