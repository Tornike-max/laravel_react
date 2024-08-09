import PageComponent from "../components/PageComponent"
import SurveyItem from "../components/SurveyItem"
import useStateContext from "../context/useStateContext"

const SurveysPage = () => {
    const { surveys } = useStateContext()

    console.log(surveys)
    const handleDeleteClick = () => {
        console.log('click')
    }
    return (
        <PageComponent title={'Surveys'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {surveys.map(survey => (
                    <SurveyItem key={survey.id} survey={survey} handleDeleteClick={handleDeleteClick} />
                ))}
            </div>
        </PageComponent>
    )
}

export default SurveysPage