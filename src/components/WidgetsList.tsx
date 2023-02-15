import { useSelector } from "react-redux"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { widgetsState } from "../app/slices/widgetsSlice"
import Widget from "./Widget"
import './WidgetsList.css'
import { FaPlus } from "react-icons/fa";
import { useState } from "react"
import WidgetModal from "./WidgetModal"

interface WidgetsListProps{
    setSelectedWidget: any
}

const WidgetsList: React.FC<WidgetsListProps> = ({
    setSelectedWidget
}) => {
    const dispatch = useAppDispatch()
    const { widgets } = useSelector(widgetsState)
    const [isOpenModal , setIsOpenModal] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [selected, setSelected] = useState()

    const handleSelectedWidget = (id: any) => {
        setSelected(id)
        setSelectedWidget(id)
    }

    return (
                <>
                    <div className="widgetListTitle">
                        Your Widgets List:
                    </div>
                    {widgets && widgets.length > 0 ? widgets.map((widget : any) => {
                        return(<div className={selected === widget.id ? "widgetContainer selected" : "widgetContainer"} onClick={() => handleSelectedWidget(widget.id)} key={widget.id}>
                            <Widget setSelected={setSelected} widgetDetails={widget} key={widget.id} setIsEditMode={setIsEditMode} setIsOpenModal={setIsOpenModal}/>
                        </div>)
                    }) : <div className="widgetContainer">no widgets</div>}
                    <div className="btnWrapper">
                        <button className="addWidgetBtn" onClick={() => setIsOpenModal(true)}><FaPlus/> <span className="btnTxt">Add New Widget</span></button>
                    </div>
                    {isOpenModal ? <WidgetModal setOpen={setIsOpenModal} isEditMode={isEditMode} selectedWidget={selected} setEditMode={setIsEditMode}/> : null}
                </>
    )
}

export default WidgetsList