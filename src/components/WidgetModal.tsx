import './WidgetModal.css'
import WidgetForm from './WidgetForm'
import { useAppDispatch } from "../app/hooks"
import { saveWidget, widgetsState } from "../app/slices/widgetsSlice"
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

interface WidgetMidalProps {
    setOpen: any
    isEditMode: boolean
    selectedWidget?: any
    setEditMode: any
}

const WidgetModal: React.FC<WidgetMidalProps> = ({
    setOpen,
    isEditMode,
    selectedWidget,
    setEditMode
}) => {
    const dispatch = useAppDispatch()
    const { widgets } = useSelector(widgetsState)
    const [currWidget, setCurrWidget] = useState<any>()

    const onSubmit = (details: any ) => {
        console.log(details)
        dispatch(saveWidget({widgetDetails: {Name: details.name, MagicNumber: parseInt(details.magicNumber), id: currWidget.id}, isEditMode: isEditMode}))
        setEditMode(false)
        setOpen(false)
    }

    useEffect(() => {
        if(widgets && widgets.length && selectedWidget){
            const selected = widgets.filter((widg: any) => widg.id === selectedWidget)
            setCurrWidget(selected[0])
        }
        else{
            const selected = widgets[0]
            setCurrWidget(selected)
        }
    }, [selectedWidget])

    return(
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={() => {
                    setEditMode(false)
                    setOpen(false)}}>&times;</span>
                <div className="inner-content">
                    {currWidget ? <WidgetForm isEditMode={isEditMode} widgetDetails={currWidget} handleOnSubmit={onSubmit}/> : null}
                </div>
            </div>
        </div>
    )
}
export default WidgetModal