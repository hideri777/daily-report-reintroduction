import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({ auth, }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">DailyReport</h2>}
        >
            <Head title="DailyReport"/>

            <div>
                ここにコンテンツを配置していく
            </div>
        </AuthenticatedLayout>
    )
}