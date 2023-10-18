
import { useBattery } from 'react-use'


function App() {
  // Вызов хука useBattery 
  const battery=useBattery()

    // Деструктуризация свойств батареи 
  const {isSupported,level, charging, dischargingTime, chargingTime}=battery;

   //Проверяем, поддерживает ли браузер API батареи 
  if(!isSupported){
    return(
      <div>
        <strong>Датчик батареи</strong>: <span>Не поддерживается</span> 
      </div>
    )
  }
  return (
    <div>
       {/* Отобразить процент заряда батареи */} 
      <strong>Уровень заряда -</strong>
      <span>{(level*100).toFixed(0)} %</span><br/>
      {/* Отображение того, заряжается ли устройство */ }
      <strong>Зарядка</strong>:  {" "} 
      <span>{charging ? "Да" : "Нет "}</span> <br /> 
       {/* Время зарядки устройства отображения */} 
      <strong>Время зарядки</strong>:   
      <span>{chargingTime ? chargingTime : "Finished"}</span> <br />
       {/* Время разрядки устройства отображения */} 
      <strong>Время разрядки</strong>:&nbsp;&nbsp;{" "}
      <span>{dischargingTime}</span>
    </div>
  )
}

export default App