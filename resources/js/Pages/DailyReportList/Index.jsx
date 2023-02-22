import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, data }) {
console.log(data);
    const makeStartDate = (working_start) => {
        const weekDay = {
            0: '日',
            1: '月',
            2: '火',
            3: '水',
            4: '木',
            5: '金',
            6: '土',
        };
        const startDate = new Date(working_start);
        const n = startDate.getDay();
        const dayOfWeek = weekDay[n];

        const year = startDate.getFullYear().toString().padStart(4, '0');
        const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
        const day = startDate.getDate().toString().padStart(2, '0');
        const hours = startDate.getHours().toString().padStart(2, '0');
        const minutes = startDate.getMinutes().toString().padStart(2, '0');
        return `${year}年${month}月${day}日(${dayOfWeek}) ${hours}:${minutes}`;
    }

    const makeEndDate = (working_end) => {
        const endDate = new Date(working_end);
        const endHours = endDate.getHours().toString().padStart(2, '0');
        const endMinutes = endDate.getMinutes().toString().padStart(2, '0');
        return `${endHours}:${endMinutes}`
    }

    const list = (data) => {
        return (
            data.map((item) => (
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg" key={item.id}>
                    <div className="mb-4">
                        <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">日時</label>
                        {makeStartDate(item.working_start)} ~ {makeEndDate(item.working_end)}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="mail_magazine" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メルマガ</label>
                        {item.mail_magazine}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="this_business_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">本日の業務内容</label>
                        {item.this_business_content}
                    </div>
                    <div>
                        <label htmlFor="next_business_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">次回の業務内容</label>
                        {item.next_business_content}
                    </div>
                    <div>
                        <label htmlFor="learning" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">学んだこと</label>
                        {item.learning}
                    </div>
                    <div>
                        <label htmlFor="others" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">その他</label>
                        {item.others}
                    </div>
                </div>
            ))
        );
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">日報一覧</h2>}
        >
            <Head title="日報作成"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    {list(data)}

                    {/* <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <div className="mb-4">
                            <label htmlFor="date" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">日時</label>
                            {makeStartDate()} ~ {makeEndDate()}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="mail_magazine" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">メルマガ</label>
                            {data.mail_magazine}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="this_business_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">本日の業務内容</label>
                            {data.this_business_content}
                        </div>
                        <div>
                            <label htmlFor="next_business_content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">次回の業務内容</label>
                            {data.next_business_content}
                        </div>
                        <div>
                            <label htmlFor="learning" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">学んだこと</label>
                            {data.learning}
                        </div>
                        <div>
                            <label htmlFor="others" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">その他</label>
                            {data.others}
                        </div>
                    </div> */}

                </div>
            </div>
        </AuthenticatedLayout>
    )
}