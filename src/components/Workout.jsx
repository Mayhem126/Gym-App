import React from "react"
import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

const Workout = (props) => {
  const { workout } = props;
  return (
    <SectionWrapper id={'formulate'} header={"welcome to"} title={['The', 'DANGER', 'Zone']}>
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return (
            <ExerciseCard exercise={exercise} index={i} key={i}/>
          )
        })}
      </div>
    </SectionWrapper>
  )
};

export default Workout;

