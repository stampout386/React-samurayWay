const BarItem = (props) => {
    return (
          <div>
              <img src={props.img} alt="" />
              {props.name}
          </div> 
    )
}

export default BarItem;