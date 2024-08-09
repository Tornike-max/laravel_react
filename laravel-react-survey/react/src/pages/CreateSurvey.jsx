import { LinkIcon, PhotoIcon, TrashIcon } from "@heroicons/react/24/outline"
import PageComponent from "../components/PageComponent"
import TButton from "../components/core/TButton"
import { useForm } from 'react-hook-form'

const CreateSurvey = () => {
    const { register, reset, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {
        const image_url = data.image_url[0];
        console.log(image_url)
        console.log(data)
        reset();
    }
    return (
        <PageComponent
            title={"Create new Survey"}
            buttons={
                <div className="flex gap-2">
                    <TButton color="green" href={`/survey/public/`}>
                        <LinkIcon className="h-4 w-4 mr-2" />
                        Public Link
                    </TButton>
                    <TButton color="red" onClick={() => { }}>
                        <TrashIcon className="h-4 w-4 mr-2" />
                        Delete
                    </TButton>
                </div>
            }
        >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                        {/* {error && (
                            <div className="bg-red-500 text-white py-3 px-3">{error}</div>
                        )} */}

                        {/*Image*/}
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Photo
                            </label>
                            <div className="mt-1 flex items-center">
                                <span className="flex justify-center  items-center text-gray-400 h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                                    <PhotoIcon className="w-8 h-8" />
                                </span>

                                <button
                                    type="button"
                                    className="relative ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                >
                                    <input
                                        type="file"
                                        className="absolute left-0 top-0 right-0 bottom-0 opacity-0"
                                        {...register('image_url', {
                                            required: 'This Field is required'
                                        })}
                                    />
                                    Change
                                </button>
                            </div>
                            {errors?.image_url?.message && <span className="text-red-500 text-sm">{errors.image_url.message}</span>}

                        </div>
                        {/*Image*/}

                        {/*Title*/}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Survey Title
                            </label>
                            <input
                                type="text"
                                name="title"
                                id="title"
                                {...register('title', {
                                    required: 'This field is required'
                                })}
                                placeholder="Survey Title"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors?.title?.message && <span className="text-red-500 text-sm">{errors.title.message}</span>}

                        </div>
                        {/*Title*/}

                        {/*Description*/}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            {/* <pre>{ JSON.stringify(survey, undefined, 2) }</pre> */}
                            <textarea
                                name="description"
                                id="description"
                                {...register('description', {
                                    required: 'This field is required'
                                })}
                                placeholder="Describe your survey"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            ></textarea>
                            {errors?.description?.message && <span className="text-red-500 text-sm">{errors.description.message}</span>}

                        </div>
                        {/*Description*/}

                        {/*Expire Date*/}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="expire_date"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Expire Date
                            </label>
                            <input
                                type="date"
                                name="expire_date"
                                id="expire_date"
                                {...register('expire_date', {
                                    required: 'This field is required'
                                })}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                            {errors?.expire_date?.message && <span className="text-red-500 text-sm">{errors.expire_date.message}</span>}

                        </div>
                        {/*Expire Date*/}

                        {/*Active*/}
                        <div className="flex items-start">
                            <div className="flex h-5 items-center">
                                <input
                                    id="status"
                                    name="status"
                                    type="checkbox"
                                    {...register('status')}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />

                            </div>
                            <div className="ml-3 text-sm">
                                <label
                                    htmlFor="comments"
                                    className="font-medium text-gray-700"
                                >
                                    Active
                                </label>
                                <p className="text-gray-500">
                                    Whether to make survey publicly available
                                </p>
                            </div>
                        </div>
                        {/*Active*/}

                        <button type="button" onClick={() => { }}>
                            Add question
                        </button>
                        {/* <SurveyQuestions
                            questions={survey.questions}
                            onQuestionsUpdate={onQuestionsUpdate}
                        /> */}
                    </div>
                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                        <button type='submit' className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Save
                        </button>
                    </div>
                </div>
            </form>
        </PageComponent>
    )
}

export default CreateSurvey