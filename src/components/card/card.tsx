import "./card.styles.css";
import axios from "axios";
import {useState, useEffect} from 'react'
import {Pokemon} from '../../App'

type CardProps = {
  pokemon: Pokemon;
}

export const Card = ({pokemon: {url, name}}: CardProps) => {
  const [spriteImg, setSpriteImg] = useState('')
  
  useEffect(() => {
    axios.get(url).then((res) => {
      const sprite = res.data.sprites.front_default;
      setSpriteImg(sprite)
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="card-container">
      <h2>{name}</h2>
      <img src={spriteImg} alt={name} />
    </div>
  );
}
