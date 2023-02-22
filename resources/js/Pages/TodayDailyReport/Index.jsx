import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";

export default function Index({ auth, data }) {
    const makeStartDate = (data) => {
        const weekDay = {
            0: '日',
            1: '月',
            2: '火',
            3: '水',
            4: '木',
            5: '金',
            6: '土',
        };
        const startDate = new Date(data.working_start);
        const n = startDate.getDay();
        const dayOfWeek = weekDay[n];

        const year = startDate.getFullYear().toString().padStart(4, '0');
        const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
        const day = startDate.getDate().toString().padStart(2, '0');
        const hours = startDate.getHours().toString().padStart(2, '0');
        const minutes = startDate.getMinutes().toString().padStart(2, '0');
        return `${year}年${month}月${day}日(${dayOfWeek}) ${hours}:${minutes}`;
    }

    const makeEndDate = (data) => {
        const endDate = new Date(data.working_end);
        const endHours = endDate.getHours().toString().padStart(2, '0');
        const endMinutes = endDate.getMinutes().toString().padStart(2, '0');
        return `${endHours}:${endMinutes}`
    }

    const createOriginalText = () => {
        if (data === null) return '';
        return `● 勤務時間\n${makeStartDate(data)} - ${makeEndDate(data)}\n\n● メルマガ\n${data.mail_magazine}\n\n● 本日の業務内容\n${data.this_business_content}\n\n● 次回の業務内容\n${data.next_business_content}\n\n● 本日気づいたこと・勉強になったこと・課題に感じたこと\n${data.learning}\n\n● その他\n${data.others}`
    }

    const [copyText, setCopyText] = useState(createOriginalText());

    const copy = () => {
        navigator.clipboard.writeText(copyText)
        .then(function() {
            alert('コピー成功したよ');
        }, function(error) {
            alert('コピー失敗: ', error);
        });
    }

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">今日の日報</h2>}
        >
            <Head title="日報作成"/>
            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <button onClick={ () => {copy()} }>クリップボードへコピー</button>
                        <textarea
                            id="copy_target"
                            rows="20"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="今日の日報"
                            value={copyText}
                            onChange={ (e) => setCopyText(e.target.value) }
                        ></textarea>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}