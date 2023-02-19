import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import UpdateDailyReportInformationForm from './Partials/UpdateDailyReportInformationForm';
import { Head } from "@inertiajs/react";

export default function Index({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">日報作成</h2>}
        >
            <Head title="日報作成"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <UpdateDailyReportInformationForm
                            className="max-w-xl"
                        />
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}