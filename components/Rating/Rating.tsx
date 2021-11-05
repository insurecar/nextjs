import { useState, useEffect } from "react";
import styles from "./Rating.module.css";
import { RatingProps } from "./Rating.props";
import StarIcon from "./Star.svg";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  children,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <StarIcon
        key={i}
        className={`${styles.star} ${i < currentRating && styles.filled}`}
      />
    ));
    setRatingArray(updatedArray);
  };
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
