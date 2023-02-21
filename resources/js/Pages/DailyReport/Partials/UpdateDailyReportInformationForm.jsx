import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';

export default function UpdateDailyReportInformationForm({ className }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        mail_magazine: '',
        this_business_content: '',
        next_business_content: '',
        learning: '',
        others: '',
        working_start: new Date(),
        working_end: new Date(),
    });

    const submit = (e) => {
        e.preventDefault();

        patch(route('daily_report.update'));
    };

    const today = new Date();
    const [fromdate, setFromDate] = useState(today);
    const [enddate, setEndDate] = useState(today); 

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">日報内容の編集</h2>
                <p className="mt-1 text-sm text-gray-600">
                    今日の日報
                </p>
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='flex'>
                    <div>
                        <InputLabel value="開始時刻" />
                        <DatePicker
                            dateFormat='yyyy/MM/dd HH:mm'
                            selected={fromdate}
                            onChange={(e) => {
                                console.log(e);
                                setFromDate(e);
                                setData('working_start', e);
                            }}
                            showTimeSelect
                            timeIntervals={15}
                        />
                    </div>
                    <div>
                        <InputLabel value="終了時刻" />
                        <DatePicker
                            dateFormat='yyyy/MM/dd HH:mm'
                            selected={enddate}
                            onChange={(e) => {
                                setEndDate(e);
                                setData('working_end', e);
                            }}
                            showTimeSelect
                            timeIntervals={15}
                        />
                    </div>
                </div>

                <label htmlFor="mail_magazine" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メルマガ</label>
                <textarea
                    id="mail_magazine"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="メルマガ読んでの感想"
                    onChange={(e) => setData('mail_magazine', e.target.value)}
                ></textarea>

                <label htmlFor="this_business_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">今日やったこと</label>
                <textarea
                    id="this_business_content"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="今日やったこと"
                    onChange={(e) => setData('this_business_content', e.target.value)}
                ></textarea>

                <label htmlFor="next_business_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">次回やること</label>
                <textarea
                    id="next_business_content"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="次回やること"
                    onChange={(e) => setData('next_business_content', e.target.value)}
                ></textarea>

                <label htmlFor="learning" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">学び・気づき</label>
                <textarea
                    id="learning"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="学び・気づき"
                    onChange={(e) => setData('learning', e.target.value)}
                ></textarea>

                <label htmlFor="others" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">その他</label>
                <textarea
                    id="others"
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="その他"
                    onChange={(e) => setData('others', e.target.value)}
                ></textarea>

                <div className="flex items-center gap-4">
                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enterFrom="opacity-0"
                        leaveTo="opacity-0"
                        className="transition ease-in-out"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
