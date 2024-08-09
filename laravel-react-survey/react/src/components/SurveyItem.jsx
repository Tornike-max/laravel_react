import { ArrowTopRightOnSquareIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline'
import TButton from './core/TButton'

const SurveyItem = ({ survey, handleDeleteClick }) => {
    console.log(survey)


    return (
        <div className="flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]">
            <img src={survey.image_url} alt={survey.title} className="w-full h-48 object-cover" />
            <h4>{survey.title}</h4>
            <div className='overflow-hidden flex-1' dangerouslySetInnerHTML={{ __html: survey.description }}></div>

            <div className="flex justify-between items-center mt-3">
                <TButton to={`surveys/${survey.id}`}>
                    <PencilSquareIcon className='w-5 h-5 mr-2' />
                    Edit
                </TButton>
                <div className='flex items-center'>
                    <TButton href={`/view/survey/${survey.slug}`} circle link>
                        <ArrowTopRightOnSquareIcon className='w-5 h-5' />
                    </TButton>

                    {survey.id &&
                        <TButton onClick={handleDeleteClick} circle link color='red'>
                            <TrashIcon />
                        </TButton>}
                </div>
            </div>
        </div >
    )
}

export default SurveyItem