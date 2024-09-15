import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CustomCards({title,text,source,buttonText}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={source}  width={200} height={200} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         {text}
        </Card.Text>
        <Button variant="primary">{buttonText}</Button>
      </Card.Body>
    </Card>
  );
}

export default CustomCards;