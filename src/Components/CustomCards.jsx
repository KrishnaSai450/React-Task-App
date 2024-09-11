import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CustomImage from './CustomImage';



function CustomCards({title,text,removeHandler,ind,source,buttonText,onNewClick}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <CustomImage source={source} height={100} width={100} onClick={()=>{onNewClick(index)}}/>
        {/* <img source={source} onClick={onNewClick}/> */}
        <Card.Text>
         {text}
        </Card.Text>
        {/* 3 */}
        {/* <InfiniteLoader color={"blue"}/> */}
        {/* <CustomToast message={"Hii"}/> */}
        <Button variant="primary" onClick={()=>{removeHandler(ind)}}>{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCards;