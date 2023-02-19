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
        name: user.name,
        email: user.email,
        mail_magazine: '',
    });

    const submit = (e) => {
        e.preventDefault();

        // patch(route('profile.update'));
        patch(route('daily_report.update'));
    };

    const today = new Date();
    const [fromdate, setFromDate] = useState(today);
    const [enddate, setEndDate] = useState(today); 

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">日報内容の編集</h2>
                {/* 必要ならここにサブメッセージ書くよ */}
                {/* <p className="mt-1 text-sm text-gray-600">
                    Update your account's profile information and email address.
                </p> */}
            </header>

            <form onSubmit={submit} className="mt-6 space-y-6">
                <div className='flex'>
                    <div>
                        <InputLabel value="開始時刻" />
                        <DatePicker
                            dateFormat='yyyy/MM/dd HH:mm'
                            selected={fromdate}
                            onChange={(e) => setFromDate(e)}
                            showTimeSelect
                            timeIntervals={15}
                        />
                    </div>
                    <div>
                        <InputLabel value="終了時刻" />
                        <DatePicker
                            dateFormat='yyyy/MM/dd HH:mm'
                            selected={enddate}
                            onChange={(e) => setEndDate(e)}
                            showTimeSelect
                            timeIntervals={15}
                        />
                    </div>
                </div>

                <label for="mail_magazine" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メルマガ</label>
                <textarea id="mail_magazine" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="メルマガ読んでの感想"></textarea>

                <label for="this_business_content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">今日やったこと</label>
                <textarea id="this_business_content" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="今日やったこと"></textarea>

                <label for="next_business_content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">次回やること</label>
                <textarea id="next_business_content" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="次回やること"></textarea>

                <label for="next_business_content" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">学び・気づき</label>
                <textarea id="next_business_content" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="学び・気づき"></textarea>

                {/* <div>
                    <InputLabel for="name" value="Name" />

                    <TextInput
                        id="name"
                        className="mt-1 block w-full"
                        value={data.name}
                        handleChange={(e) => setData('name', e.target.value)}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    <InputError className="mt-2" message={errors.name} />
                </div>

                <div>
                    <InputLabel for="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        handleChange={(e) => setData('email', e.target.value)}
                        required
                        autoComplete="email"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div> */}

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
