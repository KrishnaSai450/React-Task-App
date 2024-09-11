const CustomImage = (props)=>{
    const{source,alternateText,width,height,onClick} = props
    return(
        <img src={source} height={height}  text={alternateText} width={width} onClick={()=>{}}/>
    )
}

export default CustomImage