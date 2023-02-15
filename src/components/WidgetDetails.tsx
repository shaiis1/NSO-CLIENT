import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { widgetsState } from '../app/slices/widgetsSlice'
import './WidgetDetails.css'

interface WidgetsDetailsProps{
    selectedWidget: any
}

const WidgetDetails: React.FC<WidgetsDetailsProps> = ({
    selectedWidget
}) => {
    const { widgets } = useSelector(widgetsState)
    const [currWidget, setCurrWidget] = useState<any>()

    useEffect(() => {
        if(widgets && widgets.length && selectedWidget){
            const selected = widgets.filter((widg: any) => widg.id === selectedWidget)
            setCurrWidget(selected[0])
        }
        else{
            const selected = widgets[0]
            setCurrWidget(selected)
        }
    }, [selectedWidget, widgets])
    
    return(
            <>
                <div className='widgetDetailsTitle'>
                    Widget details:
                </div>
                <div className='widgetDetailsContainer'>
                    {currWidget ? <div className='details'>
                        <div><p><span className='detailTitle'>Name:</span> <span className='detailContent'>{currWidget?.name}</span></p></div>
                        <div><p><span className='detailTitle'>Magic Number:</span> <span className='detailContent'>{currWidget?.magicNumberStr}</span></p></div>
                    </div> : 'No Selected Widget'}
                </div>
            </>
    )
}
export default WidgetDetails