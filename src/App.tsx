import React from 'react'
import { useBattery } from 'react-use'


function App() {
  const battery=useBattery()
  const {isSupported,level, charging, dischargingTime, chargingTime}=battery;
  if(!isSupported){
    return(
      <div>
        <strong>Датчик батареи</strong>: <span>Не поддерживается</span> 
      </div>
    )
  }
  return (
    <div>
      <strong>Уровень заряда -</strong>
      <span>{(level*100).toFixed(0)} %</span><br/>
      <strong>Зарядка</strong>:  {" "} 
      <span>{charging ? "Да" : "Нет "}</span> <br /> 
      <strong>Время зарядки</strong>:   
      <span>{chargingTime ? chargingTime : "Finished"}</span> <br />
      <strong>Время разрядки</strong>:&nbsp;&nbsp;{" "}
      <span>{dischargingTime}</span>
    </div>
  )
}

export default App