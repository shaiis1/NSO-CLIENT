import { useRef } from 'react'
import { FaSave } from 'react-icons/fa'
import './WidgetForm.css'

interface WidgetFormProps {
    isEditMode: boolean
    widgetDetails?: any
    handleOnSubmit: any
}

const WidgetForm: React.FC<WidgetFormProps> = ({
    isEditMode,
    widgetDetails,
    handleOnSubmit
}) => {
    const widgetName = useRef<HTMLInputElement>(null)
    const widgetMagicNumber = useRef<HTMLInputElement>(null)
    
    const onSubmit = (event: React.FormEvent<HTMLFormElement> ) => {
        event.preventDefault();
        handleOnSubmit({name: widgetName?.current?.value, magicNumber: widgetMagicNumber?.current?.value})
    }
    
    return(
        <>
            <div className="title">
                Create New Widget
            </div>
            <form className='formContainer' onSubmit={onSubmit}>
                <div className='inputLabel'>
                <span className='labelText'>Name:</span> <input type={"text"} placeholder={"your widget name"} ref={widgetName} defaultValue={isEditMode ? widgetDetails.name : ''}></input>
                </div>
                <div className='inputLabel'>
                    <span className='labelText'>Magic Number:</span> <input type={"number"} placeholder={"your magic number"} ref={widgetMagicNumber} defaultValue={isEditMode ? widgetDetails.magicNumber : ''}></input>
                </div >
                <div className="submitBtnWrapper">
                    <button type={"submit"} className="submitBtn"><FaSave/> <span className="btnTxt">Save</span></button>
                </div>
        </form>
        </>
    )
}
export default WidgetForm