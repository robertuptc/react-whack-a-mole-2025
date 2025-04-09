import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole({den, index, onMoleWhacked}) {
  return (
    <div className="den">
      <img 
        src={MoleIcon} 
        className="Mole" 
        alt="Mole" 
        style={den.isMoleVisible ? {visibility: 'visible'} : {visibility: 'hidden'}}
        onClick={onMoleWhacked}
      />
    </div>
  )
}

export default Mole
