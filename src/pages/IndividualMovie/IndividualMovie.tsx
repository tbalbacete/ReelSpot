import { useParams } from "react-router-dom"

export const IndividualMovie: React.FC = () => {
  const { movieId } = useParams();
  return (
    <div>
      Hello {movieId}
    </div>
  )
}