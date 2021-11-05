import { useState, useEffect, KeyboardEvent } from "react";
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
      <span
        className={`${styles.star} 
      ${i < currentRating && styles.filled}
      ${isEditable && styles.editable}`}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={() => onClick(i + 1)}
        key={i}
      >
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      </span>
    ));
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };

  const onClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
