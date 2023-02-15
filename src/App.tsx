import React, { useEffect, useState } from 'react';
import './App.css';
import { useAppDispatch } from './app/hooks';
import { getWidgets } from './app/slices/widgetsSlice';
import WidgetDetails from './components/WidgetDetails';
import WidgetsList from './components/WidgetsList';

function App() {
  const [selectedWidget, setSelectedWidget] = useState(0)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getWidgets())
  }, [])

  const handleSelectedWidget = (widgetId: any) => {
    setSelectedWidget(widgetId)
  }

  return (
    <div className='wrapper'>
      <div className='widgetsListContainer'>
        <WidgetsList setSelectedWidget={handleSelectedWidget}/>
      </div>
      <div className='widgetsDetailsContainer'>
        <WidgetDetails selectedWidget={selectedWidget}/>
      </div>
    </div>
  );
}

export default App;
