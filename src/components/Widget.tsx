import './Widget.css'
import { FaEdit, FaBackspace } from 'react-icons/fa'
import { useAppDispatch } from '../app/hooks'
import { removeWidget } from '../app/slices/widgetsSlice'

interface WidgetProps{
    widgetDetails: any
    setIsEditMode: any
    setIsOpenModal: any
    setSelected: any
}
const Widget: React.FC<WidgetProps> = ({
    widgetDetails,
    setIsEditMode,
    setIsOpenModal,
    setSelected
}) => {
    const dispatch = useAppDispatch()

    return(
        <div className='widgetDetailContainer'>
            <div className="widget">
                <div>
                    name: {widgetDetails.name}
                </div>
                <div>
                    Magic Number: {widgetDetails.magicNumber}
                </div>
            </div>
            <div className="widget">
            <div onClick={() => {
                setIsEditMode(true)
                setIsOpenModal(true)
            }}>
                <FaEdit className='icon'/>
            </div>
            <div onClick={() => {
                dispatch(removeWidget({widgetDetails: {Name: widgetDetails.name, MagicNumber: parseInt(widgetDetails.magicNumber), id: widgetDetails.id}}))    
                }
            }>
                <FaBackspace className='icon'/>
            </div>
        </div>
    </div>
    )
}
export default Widget