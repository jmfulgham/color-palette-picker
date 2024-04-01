import React, { useState } from "react";
import { Rating } from "../../types";
import star from "../../assets/star.svg";

interface RatingProps {
  rating: Rating;
  handleChangeRating: () => void;
}

const Rating = ({ rating, handleChangeRating }: RatingProps) => {
  const EmptyStar = (index: number) => {

    return (<div key={index} onClick={()=>handleChangeRating(index)}>
      <svg width="16" height="15" viewBox="0 0 16 15">
        <path
          d="M5.333 11.896L8 10.312L10.688 11.896L9.979 8.896L12.292 6.917L9.229 6.646L8 3.792L6.771 6.646L3.708 6.917L6.042 8.896L5.333 11.896ZM3.062 15L4.375 9.458L0 5.729L5.75 5.229L8 0L10.25 5.25L16 5.729L11.625 9.458L12.938 15L8 12.062L3.062 15Z"
          fill="#3A424A" />
      </svg>
    </div>)
  }

  const FilledStar = (index: number) => {
    return(<div key={index} >
      <svg width="16" height="15" viewBox="0 0 16 15">
        <path
          d="M3.062 15L4.375 9.458L0 5.729L5.75 5.229L8 0L10.25 5.25L16 5.729L11.625 9.458L12.938 15L8 12.062L3.062 15Z"
          fill="#3A424A" />
      </svg>
    </div>)
  }

  {/* const handleStars = () => { */}
  {/*   const output = []; */}
  {/*   for (let i = 0; i < 5; i ++){ */}
  {/*     if (rating < i) { */}
  {/*       output.push(<FilledStar index={i}/>); */}
  {/*     } else { */}
  {/*       output.push(<EmptyStar index={i}/>) */}
  {/*     } */}
  {/*   } */}
  {/*   return output; */}
  {/* } */}

  return (<div className={"rating-container"}>
    {/* {handleStars()} */}
    <FilledStar/>
  </div>);
};


export default Rating;