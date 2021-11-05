import { useState } from "react";
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
  const [ratingArray, setRatingArrey] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => (
      <StarIcon
        key={i}
        className={`${styles.star} ${styles.fill ? i < currentRating : ""}`}
      />
    ));
  };
  return <div {...props}></div>;
};
